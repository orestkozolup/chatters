"use client";

import { auth, googleProvider, signInWithPopup } from "../../../lib/firestore";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      router.push("/users");
      console.log("HERE2", result);
    } catch (error) {
      console.log("HERE2e", error);
    }
  };

  return (
    <main>
      <h1>You are not logged in</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </main>
  );
}
