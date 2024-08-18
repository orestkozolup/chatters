import Box from "@mui/material/Box";
import Image from "next/image";
import peopleImage from "../../../../public/images/people.png";
import { styles } from "./styles";

interface HeaderProps {
  centralContent?: React.ReactElement;
}

const Header: React.FC<HeaderProps> = ({ centralContent }) => {
  return (
    <Box sx={styles.root}>
      <Image src={peopleImage} alt="People image" />
      {centralContent && centralContent}
      Account btn
    </Box>
  );
};

export default Header;
