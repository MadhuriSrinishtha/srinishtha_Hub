
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi8ObEvo8F_dNbkfM7myyvxMLEjEzNilo",
  authDomain: "leavemanage-f5dab.firebaseapp.com",
  projectId: "leavemanage-f5dab",
  storageBucket: "leavemanage-f5dab.firebasestorage.app",
  messagingSenderId: "375399287221",
  appId: "1:375399287221:web:7abc9c8d79bf20b6a0f1fc",
  measurementId: "G-WHXWJMYBJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {db}
export { auth };