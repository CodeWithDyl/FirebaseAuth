// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHfU0z1hd9y4hXuh2fZNw90uGFRsf3f_o",
  authDomain: "portfolio-auth-3057a.firebaseapp.com",
  projectId: "portfolio-auth-3057a",
  storageBucket: "portfolio-auth-3057a.appspot.com",
  messagingSenderId: "739869480953",
  appId: "1:739869480953:web:b910e1ef75850490c40f28",
  measurementId: "G-VH88DQCX1B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
