import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import config from '../config/config';



const Firebase = firebase.initializeApp(config.firebase);

export const Providers = {
    google: new firebase.auth.GoogleAuthProvider()
}

export const auth = firebase.auth();

export default Firebase;