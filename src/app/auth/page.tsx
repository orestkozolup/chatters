"use client";

import {
  auth,
  googleProvider,
  signInWithPopup,
  db,
} from "../../../lib/firestore";
import { useRouter } from "next/navigation";
import { collection, addDoc, query, getDocs, where } from "firebase/firestore";

export default function AuthPage() {
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      router.push("/users");
      
      const usersRef = collection(db, "users");

      const q = query(usersRef, where("uid", "==", user.uid));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addDoc(usersRef, {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      }
    } catch (error) {
      console.log("CHATTERS ERROR - login", error);
    }
  };

  return (
    <main>
      <h1>You are not logged in</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </main>
  );
}
