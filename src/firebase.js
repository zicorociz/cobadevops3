// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJymFmJX-_bt0m890X07yoRn7vHADq_0s",
  authDomain: "pso-ecommerce-app.firebaseapp.com",
  projectId: "pso-ecommerce-app",
  storageBucket: "pso-ecommerce-app.appspot.com",
  messagingSenderId: "414643767900",
  appId: "1:414643767900:web:90512a6567b44292f5b499",
  measurementId: "G-SBEEDFJH1Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
