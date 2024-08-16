// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "pet-app-ddf6e.firebaseapp.com",
  projectId: "pet-app-ddf6e",
  storageBucket: "pet-app-ddf6e.appspot.com",
  messagingSenderId: "612462241146",
  appId: "1:612462241146:web:fd195f1b9a00514a79e2c3",
  measurementId: "G-5J2S7L5XVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)
// const analytics = getAnalytics(app);