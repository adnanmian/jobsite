import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyC3ilgLjWPgsFAHhAZkZJj-qhc4Vm0cOVw",
  authDomain: "jobsite-6f00f.firebaseapp.com",
  projectId: "jobsite-6f00f",
  storageBucket: "jobsite-6f00f.appspot.com",
  messagingSenderId: "1053518981332",
  appId: "1:1053518981332:web:c70d3677d8315fc8133341",
  measurementId: "G-BS92DLJ5T7"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth()


//auth
