import React from 'react'
import { Segment,Image, Item, Button,Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const imageStyle ={
    filter: 'brightness(30%)',
    height:'400px',
    objectFit:'fill'
}
const itmeStyle ={
    position:'absolute',
    bottom:'5%',
    left:'5%',
    color:'white',
    width:'100%',
    height:'auto'
} 

const EventDetailedHeader = ({event}) => {
    return (
            <Segment.Group >
                <Segment basic attached='top' style={{padding:"0px"}}>
                    <Image src={event.hostPhotoURL} fluid style={imageStyle} />
                        <Segment basic style={itmeStyle}>   
                            <Item.Group>
                            <Item>
                                <Item.Content>
                                    <Header size='huge' style={{color:"white"}}> {event.title} </Header>
                                    <p>{event.date}</p>
                                    <p>
                                        Hosted By <strong> {event.hostby} </strong>
                                    </p>
                                </Item.Content>
                            </Item>
                            </Item.Group>
                        </Segment>
                </Segment>
                <Segment basic attached='bottom'>
                    <Button color="black" content="Cancle My Place " />
                    <Button color="teal" content="Join this Event " />
                    <Button as={Link} to={`/manage/${event.id}`} color="red" floated="right" content="Manage Event " />
                </Segment>
            </Segment.Group>
      
    )
}
export default EventDetailedHeader