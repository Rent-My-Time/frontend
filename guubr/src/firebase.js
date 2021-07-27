import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBitqH5jYQBr99o-Xjz4oKU5HCDR8kJ18I",
  authDomain: "guubr-443c8.firebaseapp.com",
  projectId: "guubr-443c8",
  storageBucket: "guubr-443c8.appspot.com",
  messagingSenderId: "729693676265",
  appId: "1:729693676265:web:ca989fc19c642743f84678",
  measurementId: "G-S8YD0Q02JW",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default firebase;
