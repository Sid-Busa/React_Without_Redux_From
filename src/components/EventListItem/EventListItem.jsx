import React, { Component } from 'react'
import { Segment, Item ,Icon, List, Button } from 'semantic-ui-react'
import EventAttend from '../EventAttend/EventAttend'
import { Link } from 'react-router-dom'

class EventListItem extends Component {
    render() {
        const {event,deleteEvent} = this.props
        return (
                <Segment.Group>
                    <Segment>
                        <Item.Group>
                            <Item>
                            <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                            <Item.Content>
                                <Item.Header as='a'>{event.title}</Item.Header>
                                <Item.Description>
                                    Hosted by {event.hostby}
                                </Item.Description>
                            </Item.Content>
                            </Item>
                        </Item.Group>
                    </Segment>
                    <Segment>
                        <Icon name="clock" /> {event.date} |
                        <Icon name="map marker" /> {event.city}
                    </Segment>
                    <Segment secondary>
                        <List  horizontal >
                            {event.attendees? event.attendees.map((event => (
                                <EventAttend key={event.id} attend={event}  />
                            ))) : ''}
                        </List>
                    </Segment>
                    <Segment clearing>
                        <span> {event.description} </span>
                        <Button as={Link} to={`/events/${event.id}`} color="teal" floated="right" content="View" />
                        <Button onClick={() => deleteEvent(event.id)} color="red" floated="right" content="Delete" />
                    </Segment>
                </Segment.Group>
        )
    }
}
export default EventListItem