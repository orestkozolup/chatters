import Box from "@mui/material/Box";
import Image from "next/image";
import peopleImage from "../../../../public/images/people.png";
import { styles } from "./styles";
import UserIconButton from "./UserIconButton";

interface HeaderProps {
  centralContent?: React.ReactElement;
}

const Header: React.FC<HeaderProps> = async ({ centralContent }) => {
  const userName = "User";
  const userImageSrc = "";

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
