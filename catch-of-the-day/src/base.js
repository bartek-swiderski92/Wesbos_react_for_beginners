import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAO6AaWDobKzY_TgvlUFE2VK8ErU_bmc8w",

    authDomain: "catch-of-the-day-phos23.firebaseapp.com",
  
    databaseURL: "https://catch-of-the-day-phos23-default-rtdb.europe-west1.firebasedatabase.app",
  
    projectId: "catch-of-the-day-phos23",
  
    storageBucket: "catch-of-the-day-phos23.appspot.com",
  
    messagingSenderId: "343602860339",
  
    appId: "1:343602860339:web:b2fcfc4cb8e55f067fee46",
  
    measurementId: "G-WSJHSN5VF1"
  
  
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
