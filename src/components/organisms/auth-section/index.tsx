import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";

import LoginForm from "@/components/molecules/login-form";
import peopleImage from "../../../../public/images/people.png"
import { styles } from "./styles";

const AuthSection = () => {
  return (
    <Paper sx={styles.root}>
      <Box sx={styles.heading}>
        <Image src={peopleImage} alt="People image" />
        <h1>Chatters</h1>
      </Box>
      <LoginForm />
      <Button variant="contained">Login</Button>
    </Paper>
  );
};

export default AuthSection;
