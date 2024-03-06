// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5-n7llV0uePe21Juo-Q_E0UG7t2r7FJY",
  authDomain: "netflixgpt-484fb.firebaseapp.com",
  projectId: "netflixgpt-484fb",
  storageBucket: "netflixgpt-484fb.appspot.com",
  messagingSenderId: "976254603202",
  appId: "1:976254603202:web:e90b27d9e950950af9905b",
  measurementId: "G-XLJJJC1FEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();