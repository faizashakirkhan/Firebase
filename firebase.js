
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {  getAuth, createUserWithEmailAndPassword, onAuthStateChanged ,signInWithEmailAndPassword,signOut } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js'
const firebaseConfig = {
  apiKey: "AIzaSyAnU4gMjqsRUqvuGoilLlmQWQeoY3-K-W8",
  authDomain: "login-and-sign-up-form-cd863.firebaseapp.com",
  projectId: "login-and-sign-up-form-cd863",
  storageBucket: "login-and-sign-up-form-cd863.firebasestorage.app",
  messagingSenderId: "822887171207",
  appId: "1:822887171207:web:aaad30e6d4f7eb3a172422",
  measurementId: "G-EMPHH5LNQT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export{auth,createUserWithEmailAndPassword, onAuthStateChanged ,signInWithEmailAndPassword,signOut }