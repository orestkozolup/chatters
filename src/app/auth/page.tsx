"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function AuthPage() {
  const { data: session } = useSession();

  if (session) {
    redirect("/users");
  }

  return (
    <main>
      {session ? (
        <>
          <img src={session.user?.image as string}></img>
          <h1>
            Welcome back, {session.user?.name}
          </h1>
          <p>{session.user?.email}</p>
          {/* <button
            onClick={() => signOut()}
            className="border border-black rounded-lg bg-red-400 px-5 py-1"
          >
            Sign Out
          </button> */}
        </>
      ) : (
        <>
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
        </>
      )}
    </main>
  );
}
