// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0XNNJzSGJJz5RIQXQivQNtDkRNE5FXcg",
  authDomain: "constrosathi-9ca22.firebaseapp.com",
  projectId: "constrosathi-9ca22",
  storageBucket: "constrosathi-9ca22.firebasestorage.app",
  messagingSenderId: "977386181094",
  appId: "1:977386181094:web:d437ff66c85536cd62c627",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
