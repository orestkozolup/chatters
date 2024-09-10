import Image from "next/image";
import Box from "@mui/material/Box";
import LogOutButton from "./LogOutButton";
import DeleteAccountButton from "./DeleteAccountButton";
import { ProtectedPage } from "@/components/organisms/protected-page";

import { styles } from "./styles";

const ProfilePage = async () => {
  const userName = "User";
  const userImageSrc = "";
  const userEmail = "";

  return (
    <ProtectedPage>
      <Box sx={styles.root}>
        <Box sx={styles.card}>
          <Box sx={styles.userMainInfo}>
            <Box sx={styles.imageContainer}>
              <Image
                src={userImageSrc}
                alt="User image"
                width={80}
                height={80}
              />
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
    </ProtectedPage>
  );
};

export default ProfilePage;
