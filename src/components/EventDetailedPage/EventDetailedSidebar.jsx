import React,{Fragment} from 'react'
import { Segment, Item, Label } from 'semantic-ui-react'

const EventDetailedSidebar = ({event}) => {
    const isHost = false
    return (
        <Fragment>
            <Segment color='teal' inverted style={{border:'none',textAlign:'center'}} secondary >
                {/* {event.attendees && event.attendees.length} {event.attendees.length===1 ? 'Person' : 'People' }  */}
            </Segment>
            
            <Segment>
            <Item.Group divided>
                {event.attendees &&  event.attendees.map(event => (
                    <Item key={event.id} style={{position:'relative'}}>
                    {isHost && <Label style={{position:'absolute'}} color='orange' ribbon="right" > Host </Label>   } 
                   <Item.Image size='tiny' src={event.photoURL} />
                   <Item.Content verticalAlign='middle'>
                       <Item.Header>
                            {event.name}
                       </Item.Header>    
                   </Item.Content>
                   </Item>
                )) }
                 

            </Item.Group>
            </Segment>
                
        </Fragment>
    )
}
export default EventDetailedSidebar