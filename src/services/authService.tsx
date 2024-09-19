import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDXJqwJyRnHq8-xdG-HYvBS8QzYICsNMz8",
  authDomain: "task-manager-8bfb5.firebaseapp.com",
  projectId: "task-manager-8bfb5",
  storageBucket: "task-manager-8bfb5.appspot.com",
  messagingSenderId: "858973602636",
  appId: "1:858973602636:web:3b212c5ba1d6d005a545e9",
  measurementId: "G-P6R4S5DRVV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
