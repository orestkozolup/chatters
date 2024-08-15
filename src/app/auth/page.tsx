"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthPage() {
  const { data: session } = useSession();

  return (
    <main>
      {session ? (
        <>
          <img src={session.user?.image as string}></img>
          <h1 className="text-3xl text-green-500 font-bold">
            Welcome back, {session.user?.name}
          </h1>
          <p className="text-2xl font-semibold">{session.user?.email}</p>
          <button
            onClick={() => signOut()}
            className="border border-black rounded-lg bg-red-400 px-5 py-1"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <h1 className="text-3xl text-red-500 font-bold">
            You are not logged in
          </h1>
          <div className="flex space-x-5">
            <button
              onClick={() => signIn("google")}
              className="border border-black rounded-lg px-5 py-1"
            >
              Sign in with Google
            </button>
          </div>
        </>
      )}
    </main>
  );
}
