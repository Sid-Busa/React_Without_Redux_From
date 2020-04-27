import React, { Component } from 'react';
import {connect} from 'react-redux';
import {incrementCounter,decrementCounter}  from '../../Actions/actions'
import { Button } from 'semantic-ui-react';

class TestForRedux extends Component {
        render(){
        const {counter,incrementCounter,decrementCounter} = this.props    
        return (
            <div>
                <h1>TestForRedux</h1>
                <h3> {counter} </h3>
                <Button content='increment' positive onClick={incrementCounter} />
                <Button content='decrement' negative onClick={decrementCounter} />
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
    decrementCounter
}
export default connect(mapStateToProps,mapDispatchToprops)(TestForRedux)