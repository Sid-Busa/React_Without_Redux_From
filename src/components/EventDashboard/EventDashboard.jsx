import React, { Component } from 'react';
import {connect} from 'react-redux';
import EventList from '../EventList/EventList';
import { Grid } from 'semantic-ui-react';
import { createEvent,updateEvent,deleteEvent} from '../../Actions/eventAction';
import EventActivity from '../EventActivity/EventActivity';

class EventDashboard extends Component {
     
    handleDeleteForm = (id) => {
       this.props.deleteEvent(id)
    }

    render() {
        const {events} = this.props
        return (
            <div>
                <Grid>
                   <Grid.Column  mobile={16} tablet={10} computer={10}>
                       <EventList  events={events}  deleteEvent={this.handleDeleteForm} />
                    </Grid.Column>
                    <Grid.Column  mobile={16} tablet={6} computer={6}>
                        <EventActivity />
                    </Grid.Column> 
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    events : state.event
})
const mapDispatchToProps = {
    createEvent,
    updateEvent,
    deleteEvent
}
export default connect(mapStateToProps,mapDispatchToProps)(EventDashboard)