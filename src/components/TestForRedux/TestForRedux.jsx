import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {geocodeByAddress,getLatLng} from 'react-places-autocomplete';
import {incrementCounter,decrementCounter}  from '../../Actions/actions'
import { Button } from 'semantic-ui-react';
import TestForSelectPlace from './TestForSelectPlace';
import GoogleMap from './GoogleMap';
import {openModel} from '../models/ModelAction'

class TestForRedux extends Component {
    
        constructor(props){
            super(props)
            this.state ={
                lat : 80,
                lng : 20.00
            }
        }

        handleSelectedCity = (address) =>{
            console.log(address)
            const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2lkYnVzYSIsImEiOiJjandvamNqb2EwNzYzNDltdzV6bHVoNWM5In0.x-zi240oxqVngNg5YLiCGw&limit=1`
            fetch(url).then(res => res.json()).then(res2 => 
                this.setState({
                    lat : res2.features[0].center[0],
                    lng : res2.features[0].center[1]
                })
            )
            /*     geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.setState({latlng : latLng}) )
            .catch(error => console.error('Error', error)); */
        }

        render(){
        const {counter,incrementCounter,decrementCounter,openModel} = this.props    
        return (
            <div>
                <h1>TestForRedux</h1>
                <h3> {counter} </h3>
                <Button content='increment' positive onClick={incrementCounter} />
                <Button content='decrement' negative onClick={decrementCounter} />
                <Button 
                    content='open model' 
                    color="teal" 
                    onClick={() => openModel('ModelTest')}  
                />
                <TestForSelectPlace onSelect={this.handleSelectedCity} />
                
                <GoogleMap key={this.state.lng} lat={this.state.lat} lng={this.state.lng}/>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    counter : state.test.counter
}  
)
const mapDispatchToprops = {
    incrementCounter,
    decrementCounter,
    openModel
}
export default connect(mapStateToProps,mapDispatchToprops)(TestForRedux)