import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";

import peopleImage from "../../../../public/images/people.png";
import { styles } from "./styles";
import { AuthModes } from "@/types";

interface AuthSectionProps {
  children: React.ReactElement;
  btnText: AuthModes;
}

const AuthSection: React.FC<AuthSectionProps> = ({ children, btnText }) => {
  return (
    <Paper sx={styles.root}>
      <Box sx={styles.heading}>
        <Image src={peopleImage} alt="People image" />
        <h1>Chatters</h1>
      </Box>
      {children}
      <Button variant="contained">{btnText}</Button>
    </Paper>
  );
};

export default AuthSection;
