import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyD-RdI6gmtAdOiLMVFn0SE1OH2er8Goe00",
  authDomain: "todoapp-a1809.firebaseapp.com",
  projectId: "todoapp-a1809",
  storageBucket: "todoapp-a1809.appspot.com",
  messagingSenderId: "477373069020",
  appId: "1:477373069020:web:b9072838453da9d8d8e619"
});

export { firebaseConfig as firebase };