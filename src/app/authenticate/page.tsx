import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import LoginForm from "@/components/molecules/login-form";
import loginImage from "../../../public/images/login.png";
import { styles } from "./styles";

const Authenticate = () => {
  return (
    <Box sx={styles.root}>
      <Paper sx={{...styles.centered, ...styles.leftSection}} elevation={3}>
        <Image src={loginImage} alt="Login image" width={300} height={300} />
      </Paper>
      <Box sx={{...styles.centered, ...styles.rightSection}}>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default Authenticate;
