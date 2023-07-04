// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIqua-WDhsZk2EkYdnD1gmxZ5zeuG3ZLc",
  authDomain: "t-shirt-factory-login.firebaseapp.com",
  projectId: "t-shirt-factory-login",
  storageBucket: "t-shirt-factory-login.appspot.com",
  messagingSenderId: "138207285925",
  appId: "1:138207285925:web:1cb55ec5ec05c4d758334c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
