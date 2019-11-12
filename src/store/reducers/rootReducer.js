import authReducer from './authReducer';
import habitReducer from './habitReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    habit: habitReducer,
    firestore: firestoreReducer
});

export default rootReducer;