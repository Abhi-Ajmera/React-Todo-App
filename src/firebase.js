// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { apiKeys } from "./apiKeys.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKeys,
  authDomain: "todo-app-a44cb.firebaseapp.com",
  projectId: "todo-app-a44cb",
  storageBucket: "todo-app-a44cb.appspot.com",
  messagingSenderId: "171021583970",
  appId: "1:171021583970:web:3b9c4057a842cb93a6b33b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
