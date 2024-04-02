import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBY_mWngQ_yHMsK3nS5khSTohP6eI4ltnA",
  authDomain: "express-1251b.firebaseapp.com",
  projectId: "express-1251b",
  storageBucket: "express-1251b.appspot.com",
  messagingSenderId: "727000291609",
  appId: "1:727000291609:web:3d8a3bab35a57226894d88"
};
initializeApp(firebaseConfig);

const auth = getAuth();
const googleAuth = new GoogleAuthProvider();

export { googleAuth, auth }