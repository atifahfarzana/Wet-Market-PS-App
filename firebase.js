// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import {
  updatePassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBQxD7JpWrdF2gMwk6-8n-RnjhLDwaGIM",
  authDomain: "wet-market-ps-app.firebaseapp.com",
  projectId: "wet-market-ps-app",
  storageBucket: "wet-market-ps-app.appspot.com",
  messagingSenderId: "122512827379",
  appId: "1:122512827379:web:12655e892698db972c6886"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export {
    auth,
    firestore,
    firebase,
    updatePassword,
    updateProfile,
    sendPasswordResetEmail,
    getStorage,
    ref,
    getDownloadURL,
    uploadBytes,
  };