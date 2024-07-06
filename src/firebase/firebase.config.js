// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALeyLBPk2HnVYzdtniLRYT8tg9l5GO_3c",
  authDomain: "college-corner.firebaseapp.com",
  projectId: "college-corner",
  storageBucket: "college-corner.appspot.com",
  messagingSenderId: "592327850249",
  appId: "1:592327850249:web:8b95758db9b183d7d6bbd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;