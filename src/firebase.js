// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjDp8Ih8kbabZiuAMEAFcZF8wOIRDS8yo",
  authDomain: "todo-app-a44cb.firebaseapp.com",
  projectId: "todo-app-a44cb",
  storageBucket: "todo-app-a44cb.appspot.com",
  messagingSenderId: "171021583970",
  appId: "1:171021583970:web:3b9c4057a842cb93a6b33b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
