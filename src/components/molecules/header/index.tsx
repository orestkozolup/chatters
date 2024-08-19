import Box from "@mui/material/Box";
import Image from "next/image";
import peopleImage from "../../../../public/images/people.png";
import { styles } from "./styles";

import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/authOptions";
import { NextAuthOptions } from "next-auth";
import UserIconButton from "./UserIconButton";

interface HeaderProps {
  centralContent?: React.ReactElement;
}

const Header: React.FC<HeaderProps> = async ({ centralContent }) => {
  const session = await getServerSession(authOptions as NextAuthOptions);

  const userName = session?.user?.name || "User";
  const userImageSrc = session?.user?.image || "";

  return (
    <Box sx={styles.root}>
      <Image src={peopleImage} alt="People image" />
      {centralContent && centralContent}
      <Box sx={styles.userCard}>
        <h4>{userName}</h4>
        <UserIconButton userImageSrc={userImageSrc} />
      </Box>
    </Box>
  );
};

export default Header;
