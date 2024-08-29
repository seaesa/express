import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "express-1251b.firebaseapp.com",
  projectId: "express-1251b",
  storageBucket: "express-1251b.appspot.com",
  messagingSenderId: "727000291609",
  appId: "1:727000291609:web:3d8a3bab35a57226894d88"
};
initializeApp(firebaseConfig);
const auth = getAuth();
const googleAuth = new GoogleAuthProvider();
const facebookAuth = new FacebookAuthProvider();

export { googleAuth, auth, facebookAuth }