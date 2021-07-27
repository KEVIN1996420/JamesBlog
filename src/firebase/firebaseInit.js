/* jshint esversion: 9 */
import firebase from "firebase/app";
import "firebase/firestore";

// we copy this from the firebase website 
// https://console.firebase.google.com/u/0/project/vuejs2-blogposts/overview
var firebaseConfig = {
    apiKey: "AIzaSyALEgXvOs127Cudjep0UO1ZqRdjaJHEm2w",
    authDomain: "vuejs2-blogposts.firebaseapp.com",
    projectId: "vuejs2-blogposts",
    storageBucket: "vuejs2-blogposts.appspot.com",
    messagingSenderId: "85528363323",
    appId: "1:85528363323:web:da0f5440f9826214dcb71e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore()