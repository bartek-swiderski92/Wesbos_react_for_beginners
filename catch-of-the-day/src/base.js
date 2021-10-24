import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAO6AaWDobKzY_TgvlUFE2VK8ErU_bmc8w",
    authDomain: "catch-of-the-day-phos23.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-phos23-default-rtdb.europe-west1.firebasedatabase.app",
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp }

//This is a default export;
export default base; 


// // Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAO6AaWDobKzY_TgvlUFE2VK8ErU_bmc8w",
//     authDomain: "catch-of-the-day-phos23.firebaseapp.com",
//     databaseURL: "https://catch-of-the-day-phos23-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "catch-of-the-day-phos23",
//     storageBucket: "catch-of-the-day-phos23.appspot.com",
//     messagingSenderId: "343602860339",
//     appId: "1:343602860339:web:254169880093e7197fee46",
//     measurementId: "G-3VLLEEXQX9"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);