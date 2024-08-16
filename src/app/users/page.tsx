import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOptions";
import { redirect } from "next/navigation";
import { NextAuthOptions } from "next-auth";
import UserSearch from "@/components/organisms/user-search";

import { db } from "../../../lib/firestore"; // Use firebase-admin's db

const UsersPage = async () => {
  const session = await getServerSession(authOptions as NextAuthOptions);

  if (!session) {
    redirect("/");
  }

  const usersRef = db.collection("users");
  const query = usersRef.where("email", "==", session?.user?.email).limit(1); // Limit to 1 to get a single document
  const querySnapshot = await query.get();

  if (querySnapshot.empty) {
    // No matching documents
    console.log("HERE1 No user found with this email.");
    return <div>Hello User!</div>;
  }

  // --------------------- Writing message to sub-collection
  const conversationRef = db.collection("conversations").doc("conversationId1");

  // Add participants or other conversation data
  await conversationRef.set({
    participants: ["userId1", "userId2"],
  });

  // Add a message to the sub-collection
  const messageRef = conversationRef.collection("messages").doc("messageId1");
  await messageRef.set({
    senderId: "userId1",
    timestamp: new Date(),
    content: "Hello!",
  });

  // -------------------- Reading message from sub-collection

  const snap = await messageRef.get();

  if (snap.exists) {
    console.log("HERE4", snap.data());
  }

  const userDoc = querySnapshot.docs[0];
  const res = userDoc.data();

  return (
    <>
      <div>Hello {res.name}!</div>
      <UserSearch />
    </>
  );
};

export default UsersPage;
