import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApkWk-4fNpcKCslfODL-o3ebh0lKp2pow",
    authDomain: "challenge-8d9da.firebaseapp.com",
    projectId: "challenge-8d9da",
    storageBucket: "challenge-8d9da.appspot.com",
    messagingSenderId: "888691067888",
    appId: "1:888691067888:web:90939844418ca2854aab35",
    measurementId: "G-TLKNMYE0HE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // initialize database and authentication
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };