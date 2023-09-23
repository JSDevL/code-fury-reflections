import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login.tsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
