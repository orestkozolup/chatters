"use server";

import { db } from "../../../../lib/firestore";
import { collection, query, getDocs, where } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

export async function searchUser(userEmail: string): Promise<any | null> {
  try {
    

    // const auth = getAuth();
    // const user = auth.currentUser;

    // console.log("HERE3.1", user);
    const usersRef = collection(db, "users");

    const q = query(usersRef, where("email", "==", userEmail));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const firstUser = querySnapshot.docs[0].data();
      return firstUser;
    } else {
      return null;
    }
  } catch (error) {
    console.log("CHATTERS ERROR - user search", error);
  }
}
