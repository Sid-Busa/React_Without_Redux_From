import React from 'react';
import { connect } from 'react-redux';
import ModelTest from './ModelTest';
import LoginModel from './LoginModel';
import RegisterModel from './RegisterModel'; 

const modelLookUp = {
    ModelTest,
    LoginModel,
    RegisterModel
}

const mapStateToProps = state => ({
    currentModal : state.models
})

const ModelManager = ({currentModal}) => {
    let renderModel ;
    if(currentModal){
        const {modelType,modalProps} = currentModal
        const ModelComponent =  modelLookUp[modelType]

        renderModel = <ModelComponent {...modalProps} />
    }

    return (
        <span> {renderModel} </span>
    )
}

export default connect(mapStateToProps)(ModelManager)
