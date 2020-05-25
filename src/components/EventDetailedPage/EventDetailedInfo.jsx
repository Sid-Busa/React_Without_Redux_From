import React, { useState } from "react";
import { Segment, Grid, Icon, Button } from "semantic-ui-react";
import EventDetailedMap from "./EventDetailedMap";

const EventDetailedInfo = ({ event }) => {
  const [isMapOpen, showMapToggle] = useState(false);
  return (
    <Segment.Group>
      <Segment>
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={14}>
            <p> {event.description} </p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="calendar" />
          </Grid.Column>
          <Grid.Column width={14}>
            <p> {event.date.toLocaleString()} </p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="map marker" />
          </Grid.Column>
          <Grid.Column width={14}>
            <span>
              {" "}
              {event.venue} , {event.city}{" "}
            </span>
            <Button
              onClick={() => showMapToggle(!isMapOpen)}
              content={!isMapOpen ? "show map" : "Hide map"}
              floated="right"
              color="teal"
            />
          </Grid.Column>
        </Grid>
        {isMapOpen && (
          <EventDetailedMap
            lat={event.venueLatLng.lat}
            lng={event.venueLatLng.lng}
          />
        )}
      </Segment>
    </Segment.Group>
  );
};
export default EventDetailedInfo;
