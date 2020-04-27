import React from 'react'
import {connect} from 'react-redux';
import { Grid } from 'semantic-ui-react'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedChat from './EventDetailedChat'
import EventDetailedSidebar from './EventDetailedSidebar'

const mapStateToProps = (state,ownProps) => {
    const eventID = ownProps.match.params.id

    let event ;

    if(eventID && state.event.length >0 ){
        event = state.event.filter(event => event.id === eventID)[0]
    }
    return {
        event
    }
}

const EventDetailedPage = ({event}) => {    
    return (
        <div>
            <Grid>
                <Grid.Column width={10}>
                    <EventDetailedHeader event={event} />
                    <EventDetailedInfo event={event} />
                    <EventDetailedChat />
                </Grid.Column>
                <Grid.Column width={6}>
                    <EventDetailedSidebar event={event}/>
                </Grid.Column>
            </Grid> 
        </div>
    )
}
export default connect(mapStateToProps)(EventDetailedPage)