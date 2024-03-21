// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgOCIC7161_vOlr9CSvdyejA8AuMUsgg4",
  authDomain: "scissor-react.firebaseapp.com",
  projectId: "scissor-react",
  storageBucket: "scissor-react.appspot.com",
  messagingSenderId: "508290919866",
  appId: "1:508290919866:web:49b15ffb755310060dc183"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics, app };