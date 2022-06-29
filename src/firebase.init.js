// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4_d_-pfZpfwEMDHGm_hfq9ybVdQz_dOE",
  authDomain: "jobs-work.firebaseapp.com",
  projectId: "jobs-work",
  storageBucket: "jobs-work.appspot.com",
  messagingSenderId: "338647278233",
  appId: "1:338647278233:web:e3ac9c83fddc47ad1c8e08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth ;