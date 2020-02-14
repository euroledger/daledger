import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import competitionReducer from './competitionReducer';

export default combineReducers({
    auth: authReducer,
    projects: projectReducer,
    competition: competitionReducer
})
