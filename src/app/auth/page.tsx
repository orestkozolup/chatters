"use client";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function AuthPage() {
  const { data: session } = useSession();

  if (session) {
    redirect("/users");
  }

  return (
    <main>
      <h1>You are not logged in</h1>
      <div>
        <button
          onClick={() =>
            signIn("google", { callbackUrl: "http://localhost:3000/users" })
          }
        >
          Sign in with Google
        </button>
      </div>
    </main>
  );
}
