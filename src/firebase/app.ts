import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_AYpRsK2ZGvm4pryariA3vHGasePKNjk",
  authDomain: "code-fury-reflections.firebaseapp.com",
  projectId: "code-fury-reflections",
  storageBucket: "code-fury-reflections.appspot.com",
  messagingSenderId: "845240599343",
  appId: "1:845240599343:web:b378231143881766c757da",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
