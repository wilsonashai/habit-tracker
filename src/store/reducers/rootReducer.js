import authReducer from './authReducer';
import habitReducer from './habitReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    habit: habitReducer
});

export default rootReducer;