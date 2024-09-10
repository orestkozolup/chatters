"use server";

import { db } from "../../../../lib/firestore";

export const saveMessage = async (
  senderId: string,
  receiverId: string,
  content: string
) => {
  // Sort the participants alphabetically
  // const participants = [senderId, receiverId].sort((a, b) =>
  //   a.toLowerCase().localeCompare(b.toLowerCase())
  // );
  // const conversationId = `${participants[0]}_${participants[1]}`;
  // const conversationRef = db.collection("conversations").doc(conversationId);

  // // Check if the conversation exists
  // const conversationSnapshot = await conversationRef.get();

  // // If the conversation doesn't exist, create it with participants
  // if (!conversationSnapshot.exists) {
  //   await conversationRef.set({
  //     participants, // Store participants
  //     createdAt: FieldValue.serverTimestamp(), // Store creation time
  //   });
  // }

  // // Add the message to the messages sub-collection
  // const messageRef = conversationRef.collection("messages").doc(); // Auto-generated message ID
  // await messageRef.set({
  //   senderId,
  //   content,
  //   timestamp: FieldValue.serverTimestamp(), // Use server timestamp for message
  // });
};

export const fetchMessages = async (senderId: string, receiverId: string) => {
  // const participants = [senderId, receiverId].sort((a, b) =>
  //   a.toLowerCase().localeCompare(b.toLowerCase())
  // );
  // const conversationId = `${participants[0]}_${participants[1]}`;
  // const conversationRef = db.collection("conversations").doc(conversationId);

  // // Check if the conversation exists
  // const conversationSnapshot = await conversationRef.get();

  // if (!conversationSnapshot.exists) {
  //   return [];
  // }

  // // Fetch messages from the messages sub-collection and serialize them
  // const messagesSnapshot = await conversationRef.collection("messages").orderBy('timestamp').get();

  // // Convert Firestore data into a plain JS array
  // const messages = messagesSnapshot.docs.map((doc) => {
  //   const data = doc.data();

  //   // Manually transform any Firestore Timestamps into plain JS Date objects
  //   return {
  //     id: doc.id,
  //     ...data,
  //     timestamp: data.timestamp.toDate(), // Convert Firestore Timestamp to JS Date
  //   };
  // });

  // return messages;
};
