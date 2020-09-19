import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2Ln0o6XG7JyulVGKXYtAK7VqKsAmqv5I",
  authDomain: "react-app-journal-b89dd.firebaseapp.com",
  databaseURL: "https://react-app-journal-b89dd.firebaseio.com",
  projectId: "react-app-journal-b89dd",
  storageBucket: "react-app-journal-b89dd.appspot.com",
  messagingSenderId: "54026134941",
  appId: "1:54026134941:web:2059db2217ef6ebafa7b74",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
