// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbItTlIuUI28R7hnunW1TGnSnX64jxX7A",
  authDomain: "hello-world-82a51.firebaseapp.com",
  projectId: "hello-world-82a51",
  storageBucket: "hello-world-82a51.appspot.com",
  messagingSenderId: "216891171478",
  appId: "1:216891171478:web:66546d8a66269ec49458b7",
  measurementId: "G-J81810XCRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);