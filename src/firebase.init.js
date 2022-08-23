// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYLcslFnKo-4jVd7tizU1nTTgQ306it5I",
  authDomain: "todo-with-firebase-b8ac4.firebaseapp.com",
  projectId: "todo-with-firebase-b8ac4",
  storageBucket: "todo-with-firebase-b8ac4.appspot.com",
  messagingSenderId: "400995424793",
  appId: "1:400995424793:web:c29dc7b8630ecc5b45e888"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;