import Image from "next/image";
import Box from "@mui/material/Box";
import LoginForm from "@/components/molecules/login-form";
import loginImage from "../../../public/images/login.png";
import { styles } from "./styles";

const Auth = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={{...styles.centered, ...styles.leftSection}}>
        <Image src={loginImage} alt="Login image" width={200} height={200} />
      </Box>
      <Box sx={{...styles.centered, ...styles.rightSection}}>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default Auth;
