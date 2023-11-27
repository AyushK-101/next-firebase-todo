// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI7sWtth8ZmsSsuJHPaHY5f9DpFKKfYvg",
  authDomain: "fir-todo-app-37bb8.firebaseapp.com",
  projectId: "fir-todo-app-37bb8",
  storageBucket: "fir-todo-app-37bb8.appspot.com",
  messagingSenderId: "596228221572",
  appId: "1:596228221572:web:3e9d5921928334650970d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);