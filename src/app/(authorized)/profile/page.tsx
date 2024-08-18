import { getServerSession } from "next-auth";
import { NextAuthOptions } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../../../lib/authOptions";

import Image from "next/image";
import Box from "@mui/material/Box";
import LogOutButton from "./LogOutButton";
import DeleteAccountButton from "./DeleteAccountButton";

import { styles } from "./styles";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions as NextAuthOptions);

  if (!session) {
    redirect("/auth");
  }

  console.log("HERE3", session);

  const userName = session?.user?.name || "User";
  const userImageSrc = session?.user?.image || "";
  const userEmail = session?.user?.email || "";

  return (
    <Box sx={styles.root}>
      <Box sx={styles.card}>
        <Box sx={styles.userMainInfo}>
          <Box sx={styles.imageContainer}>
            <Image src={userImageSrc} alt="User image" width={80} height={80} />
          </Box>
          <h1 style={styles.nameContainer}>{userName}</h1>
        </Box>
        <p>{userEmail}</p>
      </Box>
      <Box sx={styles.actionsContainer}>
        <LogOutButton />
        <DeleteAccountButton email={userEmail} />
      </Box>
    </Box>
  );
};

export default ProfilePage;
