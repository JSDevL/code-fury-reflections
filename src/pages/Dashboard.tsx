import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../firebase/app.ts";
import { useCallback, useState } from "react";
import { redirect } from "react-router-dom";

export const Dashboard = () => {
  const [emailLoginForm, setEmailLoginForm] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const [user] = useAuthState(auth, {
    onUserChanged: async (user) => {
      console.log(user);
    },
  });

  const onSignInClick = useCallback(async () => {
    await signInWithEmailAndPassword(
      emailLoginForm.email,
      emailLoginForm.password,
    );
  }, [signInWithEmailAndPassword, emailLoginForm]);

  const onContinueWithGoogleClick = useCallback(async () => {
    await signInWithGoogle();
  }, [signInWithGoogle]);

  if (user) {
    redirect("/dashboard");
  }

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      Dashboard
    </main>
  );
};
