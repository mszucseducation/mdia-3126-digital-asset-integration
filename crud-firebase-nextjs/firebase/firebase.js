// npm install firebase
// npm install uid

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD6lzIs_Qm7B4wU30O6_1aoC29IvX0ExE",
  authDomain: "test-1674f.firebaseapp.com",
  projectId: "test-1674f",
  storageBucket: "test-1674f.appspot.com",
  messagingSenderId: "1020250964544",
  appId: "1:1020250964544:web:786f0bb4aadb98852815a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);