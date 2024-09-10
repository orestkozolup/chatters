"use server";

import { db } from "../../../../lib/firestore";

export async function searchUser(userQuery: string): Promise<any | null> {
  // const userDoc = await db.collection("users")
  //   .where("email", "==", userQuery)
  //   .limit(1)
  //   .get()
  //   .then(snapshot => snapshot.docs[0]?.data() ?? null);

  // return userDoc;
}
