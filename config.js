import firebase from "firebase"
require("@firebase/firestore")


const firebaseConfig = {
    apiKey: "AIzaSyBijwipkHhKois86ZAdb2SSvglPhZH9A4c",
    authDomain: "e-library-a5431.firebaseapp.com",
    projectId: "e-library-a5431",
    storageBucket: "e-library-a5431.appspot.com",
    messagingSenderId: "1034855201624",
    appId: "1:1034855201624:web:ee54ec5752eea9edbf032d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database()