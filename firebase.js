// import { initializeApp } from "firebase/app";
// import firebase from '@react-native-firebase/app'
import * as firebase from 'firebase/app'
// import {AppRegistry} from 'react-native';
// import * as firestore from "firebase/firestore";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOaXVofftJVuHTG9OLN6cq7fHSOUQEEjw",
  authDomain: "native-crime-report.firebaseapp.com",
  projectId: "native-crime-report",
  storageBucket: "native-crime-report.appspot.com",
  messagingSenderId: "946541924723",
  appId: "1:946541924723:web:6d03fb13c3340fd1d1b506",
  measurementId: "G-1P25FC8T2Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.getAnalytics(app);
// getAuth()
// firestore.getFirestore()