"use server";

import { db } from "../../../../lib/firestore";

export const deleteAccount = async (email: string): Promise<void> => {
  // const snapshot = await db
  //   .collection("users")
  //   .where("email", "==", email)
  //   .limit(1)
  //   .get();

  // // Step 2: Check if the user exists
  // if (!snapshot.empty) {
  //   // Get the document ID
  //   const userDocId = snapshot.docs[0].id;

  //   // Step 3: Delete the document
  //   await db.collection("users").doc(userDocId).delete();
  // }
};
