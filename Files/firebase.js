// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Optionally import the services that you want to use
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJFfHQcJsPLH0NseEc--_4lzAiybzOukc",
  authDomain: "fir-auth-de7ad.firebaseapp.com",
  projectId: "fir-auth-de7ad",
  storageBucket: "fir-auth-de7ad.appspot.com",
  messagingSenderId: "691449762797",
  appId: "1:691449762797:web:3742ea62a2516b0efb0de4",
  measurementId: "G-0LYVYBX0V6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication = getAuth(app);