import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Image from "next/image";

import peopleImage from "../../../../public/images/people.png";
import { styles } from "./styles";

interface AuthSectionProps {
  children: React.ReactElement;
}

const AuthSection: React.FC<AuthSectionProps> = ({ children }) => {
  return (
    <Paper sx={styles.root}>
      <Box sx={styles.heading}>
        <Image src={peopleImage} alt="People image" />
        <h1>Chatters</h1>
      </Box>
      {children}
    </Paper>
  );
};

export default AuthSection;
