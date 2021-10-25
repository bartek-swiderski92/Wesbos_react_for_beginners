import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAO6AaWDobKzY_TgvlUFE2VK8ErU_bmc8w",
    authDomain: "catch-of-the-day-phos23.firebaseapp.com",  
    databaseURL: "https://catch-of-the-day-phos23-default-rtdb.europe-west1.firebasedatabase.app",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
