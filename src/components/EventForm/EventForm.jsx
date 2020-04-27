import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Form,Segment, Button } from 'semantic-ui-react'
import {createEvent,updateEvent} from '../../Actions/eventAction'
import cuid from 'cuid'

const mapStateToProps = (state,ownProps) => {
    const eventID = ownProps.match.params.id 
    
    let event ={
        title:'',
        date:'',
        city:'',
        venue : '',
        hostby :'',
    }
    if(eventID && state.event.length){
        event = state.event.filter(event => event.id === eventID)[0]
    }
    return {
        event
    }
}

const mapDispatchToProps = {
    createEvent,
    updateEvent
}

class EventForm extends Component {
    constructor(props){
        super(props)
        this.state = {...this.props.event}
    }


    handleSubmitForm = (e) => {
        e.preventDefault()
        console.log(this.state)
        if(this.state.id){
            this.props.updateEvent(this.state)
            this.props.history.push(`/events/${this.state.id}`)
        }else{
            const newEvent = {...this.state, id : cuid(), hostPhotoURL: '/assets/Dave.jpg' }
            this.props.createEvent(newEvent)
            this.props.history.push('/events')
        }
    }
    handleInput = ({target: {name,value}}) => {
        this.setState({
            [name] : value
        })
    }
    render() {
        const {title,date,city,venue,hostby} = this.state
        return (
            <Segment>
                <Form onSubmit={this.handleSubmitForm} autoComplete='off'>
                <Form.Field>
                    <label>Title</label>
                    <input name='title' value={title} onChange={this.handleInput} placeholder='Enter title' />
                </Form.Field>
                <Form.Field>
                    <label>Event Date</label>
                    <input name='date' value={date} onChange={this.handleInput} type='date' />
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input name='city' value={city} onChange={this.handleInput} placeholder='City event is taking place' />
                </Form.Field>
                <Form.Field>
                    <label>Venue</label>
                    <input name='venue' value={venue} onChange={this.handleInput} placeholder='Enter the vanue of event' />
                </Form.Field>
                <Form.Field>
                    <label>Hosted By</label>
                    <input name='hostby' value={hostby} onChange={this.handleInput} placeholder='Enter name of person hosing' />
                </Form.Field>
                    <Button type="submit" positive > Submit </Button>
                    <Button onClick={this.props.history.goBack} style={{backgroundColor:'rgb(200,200,200)'}} > Cancel </Button>
                </Form>
            </Segment>

        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EventForm)