import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDHeuiEf_4XduyuXB22utY6MdvXhel5u0A",
    authDomain: "e-ride-app-6cc05.firebaseapp.com",
    projectId: "e-ride-app-6cc05",
    storageBucket: "e-ride-app-6cc05.appspot.com",
    messagingSenderId: "21014478872",
    appId: "1:21014478872:web:8c8f9527a2ef20b175836d"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
