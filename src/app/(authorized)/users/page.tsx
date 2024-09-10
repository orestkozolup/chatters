import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/authOptions";
import { redirect } from "next/navigation";
import { NextAuthOptions } from "next-auth";
//import ChatCard from "@/components/atoms/chat-card";
import ChatTile from "@/components/molecules/chat-tile";
import AddContactTile from "@/components/molecules/add-contact-tile";
import { styles } from "./styles";
import { Conversation } from "./Conversation";

import DrawerLayout from "@/components/templates/drawer-layout";

// import { db } from "../../../lib/firestore"; // Use firebase-admin's db

const UsersPage = async () => {
  const session = await getServerSession(authOptions as NextAuthOptions);

  if (!session) {
    redirect("/auth");
  }

  // const usersRef = db.collection("users");
  // const query = usersRef.where("email", "==", session?.user?.email).limit(1); // Limit to 1 to get a single document
  // const querySnapshot = await query.get();

  // if (querySnapshot.empty) {
  //   // No matching documents
  //   console.log("HERE1 No user found with this email.");
  //   return <div>Hello User!</div>;
  // }

  // --------------------- Writing message to sub-collection
  // const conversationRef = db.collection("conversations").doc("conversationId1");

  // Add participants or other conversation data
  // await conversationRef.set({
  //   participants: ["userId1", "userId2"],
  // });

  // Add a message to the sub-collection
  // const messageRef = conversationRef.collection("messages").doc("messageId1");
  // await messageRef.set({
  //   senderId: "userId1",
  //   timestamp: new Date(),
  //   content: "Hello!",
  // });

  // -------------------- Reading message from sub-collection

  // const snap = await messageRef.get();

  // if (snap.exists) {
  //   console.log("HERE2", snap.data());
  // }

  // const userDoc = querySnapshot.docs[0];
  // const res = userDoc.data();

  const name = "Name";
  const image = "";
  // const name = res.name;
  // const image = res.image;

  return (
    // <Box sx={styles.root}>
    //   <div>Hello {name}!</div>
    //   <ChatCard userName={name} userImageSrc={image} active />
    //   <ChatCard userName={name} userImageSrc={image} active={false} />
    // </Box>

    <DrawerLayout
      drawerContent={
        <>
          <AddContactTile />
          <ChatTile userName={name} userImageSrc={image} active />
          <ChatTile userName={name} userImageSrc={image} active={false} />
          <ChatTile userName={name} userImageSrc={image} active={false} />
          <ChatTile userName={name} userImageSrc={image} active={false} />
          <ChatTile userName={name} userImageSrc={image} active={false} />
          <ChatTile userName={name} userImageSrc={image} active={false} />
          <ChatTile userName={name} userImageSrc={image} active={false} />
          <ChatTile userName={name} userImageSrc={image} active={false} />
          <ChatTile userName={name} userImageSrc={image} active={false} />
          <ChatTile userName={name} userImageSrc={image} active={false} />
          <ChatTile userName={name} userImageSrc={image} active={false} />
          <ChatTile userName={name} userImageSrc={image} active={false} />
          <ChatTile userName={name} userImageSrc={image} active={false} />
          <ChatTile userName={name} userImageSrc={image} active={false} />
          <ChatTile userName={name} userImageSrc={image} active={false} />
          <ChatTile userName={name} userImageSrc={image} active={false} />
          <ChatTile userName={name} userImageSrc={image} active={false} />
        </>
      }
      pageContent={<Conversation />}
    />
  );
};

export default UsersPage;
