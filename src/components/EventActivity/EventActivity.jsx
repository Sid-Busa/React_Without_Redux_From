import React, { Fragment } from 'react'
import { Header, Segment } from 'semantic-ui-react'

const EventActivity = () => {
    return (
        <Fragment>
            <Header attached="top" content="Recent activities" />
            <Segment attached>
                <p>
                    activities
                </p>
            </Segment>
        </Fragment>
    )
}

export default EventActivity
