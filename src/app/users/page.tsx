import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOptions";
import { redirect } from "next/navigation";
import { NextAuthOptions } from "next-auth";

import { db } from "../../../lib/firestore"; // Use firebase-admin's db

const UsersPage = async () => {
  const session = await getServerSession(authOptions as NextAuthOptions);

  const userSnap = await db.collection("users").doc("hM6RS6KtAzERSB8BzxwL").get();

  console.log("HERE1", userSnap);

  if (!session) {
    redirect("/");
  }

  return <div>Hello Users Page</div>;
};

export default UsersPage;
