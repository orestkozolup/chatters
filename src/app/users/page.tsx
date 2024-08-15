import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOptions";
import { redirect } from "next/navigation";
import { NextAuthOptions } from "next-auth";

import { db } from "../../../lib/firestore"; // Use firebase-admin's db

const UsersPage = async () => {
  const session = await getServerSession(authOptions as NextAuthOptions);

  if (!session) {
    redirect("/");
  }

  const userSnap = await db
    .collection("users")
    .doc("hM6RS6KtAzERSB8BzxwL")
    .get();

  const usersRef = db.collection("users");
  const query = usersRef.where("email", "==", session?.user?.email).limit(1); // Limit to 1 to get a single document
  const querySnapshot = await query.get();

  if (querySnapshot.empty) {
    // No matching documents
    console.log('HERE1 No user found with this email.');
    return <div>Hello User!</div>;
  }

  const userDoc = querySnapshot.docs[0];
  const res = userDoc.data();

  return <div>Hello {res.name}!</div>;
};

export default UsersPage;
