// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiPjOy4lXAoAcHFk6du-7zqy7DKpW2NJY",
  authDomain: "react-no-bullshit.firebaseapp.com",
  databaseURL: "https://react-no-bullshit.firebaseio.com",
  projectId: "react-no-bullshit",
  storageBucket: "react-no-bullshit.appspot.com",
  messagingSenderId: "119933065352",
  appId: "1:119933065352:web:ae20904ee2ce851518673d",
  measurementId: "G-5EMGBMRRTJ"
};

firebase.initializeApp(firebaseConfig);
