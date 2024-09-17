// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-75748.firebaseapp.com",
  projectId: "mern-estate-75748",
  storageBucket: "mern-estate-75748.appspot.com",
  messagingSenderId: "234590285679",
  appId: "1:234590285679:web:1d34994b2a65d98294429a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);