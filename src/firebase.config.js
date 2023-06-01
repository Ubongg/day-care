import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1M_c3kvdAkbUyedHaIscsD8_ulbzQCjI",
  authDomain: "day-care-app-1b698.firebaseapp.com",
  projectId: "day-care-app-1b698",
  storageBucket: "day-care-app-1b698.appspot.com",
  messagingSenderId: "522791364636",
  appId: "1:522791364636:web:f4d05e6bc402e485cad7d9",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
