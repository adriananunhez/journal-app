import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
}


/*{
    apiKey: "AIzaSyCdvaVZnOgib12BIi8GEU4sjZV_I1Jro7c",
    authDomain: "react-app-course-7730a.firebaseapp.com",
    databaseURL: "https://react-app-course-7730a.firebaseio.com",
    projectId: "react-app-course-7730a",
    storageBucket: "react-app-course-7730a.appspot.com",
    messagingSenderId: "401782819914",
    appId: "1:401782819914:web:9ef739af2e26755c4caab3"
  };
*/
  /*const firebaseConfigTesting = {
    apiKey: "AIzaSyDfR02OowhncTpaK7vlcXFj8xrzPrBH_QM",
    authDomain: "react-testi-206a6.firebaseapp.com",
    databaseURL: "https://react-testi-206a6.firebaseio.com",
    projectId: "react-testi-206a6",
    storageBucket: "react-testi-206a6.appspot.com",
    messagingSenderId: "96376992172",
    appId: "1:96376992172:web:e9fae27918574a074bca09",
    measurementId: "G-TM12SGS61Y"
  };


// Initialize Firebase
  if( process.env.NODE_ENV === 'test'){
    firebase.initializeApp(firebaseConfigTesting);
  }else{
    firebase.initializeApp(firebaseConfig);
  }*/

  firebase.initializeApp(firebaseConfig);



const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}