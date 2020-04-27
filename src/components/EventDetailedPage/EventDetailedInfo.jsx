import React from 'react'
import { Segment, Grid, Icon, Button } from 'semantic-ui-react'

const EventDetailedInfo = ({event}) => {
    return (
        <Segment.Group>
            <Segment>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' color='teal' name='info' />
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <p> {event.description} </p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' color='teal' name='calendar' />
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <p> {event.date} </p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' color='teal' name='map marker' />
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <span> {event.venue} </span>
                        <Button content='view map' floated="right" color="teal" />
                    </Grid.Column>
                </Grid>
            </Segment>
        </Segment.Group>
    )
}
export default EventDetailedInfo