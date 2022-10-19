// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";

const config={
    apiKey: "AIzaSyDjXvxw6vY7UjypJU25r-QLvDmORZZ4FfA",
    authDomain: "ecommerce-jini.firebaseapp.com",
    projectId: "ecommerce-jini",
    storageBucket: "ecommerce-jini.appspot.com",
    messagingSenderId: "936219483829",
    appId: "1:936219483829:web:25aeea561da11d020528fc"
}

firebase.initializeApp(config);
export default firebase;