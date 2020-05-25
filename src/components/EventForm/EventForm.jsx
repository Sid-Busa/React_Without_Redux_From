/* global google */

import React, { Component } from "react";
import { connect } from "react-redux";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { reduxForm, Field } from "redux-form";
import { Form, Segment, Button, Grid, Header } from "semantic-ui-react";
import { createEvent, updateEvent } from "../../Actions/eventAction";
import InputText from "../Form/InputText";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan,
} from "revalidate";
import cuid from "cuid";
import TextAreaField from "../Form/TextAreaField";
import SelectInput from "../Form/SelectInput";
import DateInput from "../Form/DateInput";
import SelectPlaceInput from "../Form/SelectPlaceInput";

const mapStateToProps = (state, ownProps) => {
  const eventID = ownProps.match.params.id;
  let event = {};
  if (eventID && state.event.length) {
    event = state.event.filter((event) => event.id === eventID)[0];
  }
  return {
    initialValues: event,
  };
};
const mapDispatchToProps = {
  createEvent,
  updateEvent,
};
const validate = combineValidators({
  title: isRequired("The event title is required"),
  category: isRequired({ message: "The category is required" }),
  description: composeValidators(
    isRequired({ message: "Please enter description" }),
    hasLengthGreaterThan(4)({
      message: "Description need to be at least 5 characters",
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired("date"),
});
const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" },
];
class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityLatLng: {},
      vanueLatLng: {},
    };
  }
  onSubmitForm = (value) => {
    value.venueLatLng = this.state.cityLatLng;
    if (this.props.initialValues.id) {
      this.props.updateEvent(value);
      this.props.history.push(`/events/${this.props.initialValues.id}`);
    } else {
      const newEvent = {
        ...value,
        id: cuid(),
        hostby: "sidbusa",
        hostPhotoURL: "/assets/Dave.jpg",
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events/${newEvent.id}`);
    }
  };
  handleCitySelect = (selectedcity) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${selectedcity}.json?access_token=pk.eyJ1Ijoic2lkYnVzYSIsImEiOiJjandvamNqb2EwNzYzNDltdzV6bHVoNWM5In0.x-zi240oxqVngNg5YLiCGw&limit=1`;
    fetch(url)
      .then((res) => res.json())
      .then((res2) =>
        this.setState({
          cityLatLng: {
            lat: res2.features[0].center[0],
            lng: res2.features[0].center[1],
          },
        })
      );
  };
  handleVenueSelect = (selectedVenue) => {
    geocodeByAddress(selectedVenue)
      .then((results) => getLatLng(results[0]))
      .then((latlng) => {
        this.setState({
          vanueLatLng: latlng,
        });
      })
      .then(() => {
        this.props.change("venue", selectedVenue);
      });
  };
  render() {
    const {
      history,
      initialValues,
      invalid,
      submitting,
      pristine,
    } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Enter Event Detailed" />
            <Form
              onSubmit={this.props.handleSubmit(this.onSubmitForm)}
              autoComplete="off"
            >
              <Field
                name="title"
                component={InputText}
                type="text"
                placeholder="Give the name of your event"
              />
              <Field
                name="category"
                component={SelectInput}
                options={category}
                type="text"
                placeholder="what is event about ?"
              />
              <Field
                name="description"
                component={TextAreaField}
                rows={3}
                type="text"
                placeholder="Tell us about your event"
              />
              <Header sub color="teal" content="Enter Location Detailed" />
              <Field
                name="city"
                component={SelectPlaceInput}
                type="text"
                options={{ type: ["(cities)"] }}
                onSelect={this.handleCitySelect}
                placeholder="Enter City"
              />
              <Field
                name="venue"
                component={SelectPlaceInput}
                options={{
                  location: new google.maps.LatLng(this.state.cityLatLng),
                  radius: 1000,
                  type: ["establishment"],
                }}
                onSelect={this.handleVenueSelect}
                type="text"
                placeholder="Enter Vanue"
              />
              <Field
                name="date"
                component={DateInput}
                dateFormat="dd LLL yyyy h:mm a"
                showTimeSelect
                timeFormat="HH:mm"
                placeholder="Enter Date"
              />

              <Button
                type="submit"
                disabled={invalid || submitting || pristine}
                positive
              >
                {" "}
                Submit{" "}
              </Button>
              <Button
                onClick={
                  initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push(`/events`)
                }
                style={{ backgroundColor: "rgb(200,200,200)" }}
              >
                {" "}
                Cancel{" "}
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "eventForm", validate })(EventForm));
