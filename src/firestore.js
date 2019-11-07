import * as firebase from 'firebase';
import firebaseConfig from './config/dev';

firebase.initializeApp(firebaseConfig);
export default firebase;
//const database = firebase.database().ref();

//export const habitsRef = database.child("habits")