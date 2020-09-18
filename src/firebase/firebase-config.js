import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCdvaVZnOgib12BIi8GEU4sjZV_I1Jro7c",
    authDomain: "react-app-course-7730a.firebaseapp.com",
    databaseURL: "https://react-app-course-7730a.firebaseio.com",
    projectId: "react-app-course-7730a",
    storageBucket: "react-app-course-7730a.appspot.com",
    messagingSenderId: "401782819914",
    appId: "1:401782819914:web:9ef739af2e26755c4caab3"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}