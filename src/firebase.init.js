// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxvLEaOE4-pL-TBjsTLMJQK_3BR5xiF0Q",
  authDomain: "jobs-hunting.firebaseapp.com",
  projectId: "jobs-hunting",
  storageBucket: "jobs-hunting.appspot.com",
  messagingSenderId: "644199123869",
  appId: "1:644199123869:web:aafa55d491c9efb4277d74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth ;