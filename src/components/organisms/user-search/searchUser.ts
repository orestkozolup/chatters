"use server";

import { db } from "../../../../lib/firestore";

export async function searchUser(userQuery: string) {
  // This runs on the server
  // Replace this with your database interaction logic
  const usersRef = db.collection("users");
  const query = usersRef.where("name", "==", userQuery).limit(1);
  const querySnapshot = await query.get();
  const userDoc = querySnapshot.docs[0];
  const data = userDoc.data();
  return data;
}
