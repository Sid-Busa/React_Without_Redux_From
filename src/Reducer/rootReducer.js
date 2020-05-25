import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import {reducer as ToastrReducer} from 'react-redux-toastr'
import testReducer from './testReducer';
import eventReducer from './eventReducer';
import modelReducer from '../components/models/ModelReducer';
import authReducer from './authReducer';

const rootReducer =  combineReducers({
    form :FormReducer,
    test : testReducer,
    event : eventReducer,
    models : modelReducer,
    auth : authReducer,
    toastr : ToastrReducer
})

export default rootReducer