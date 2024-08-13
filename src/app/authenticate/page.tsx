import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import AuthSection from "@/components/organisms/auth-section";
import authImage from "../../../public/images/auth.png";
import { styles } from "./styles";

const Authenticate = () => {
  return (
    <Box sx={styles.root}>
      <Paper sx={{...styles.centered, ...styles.leftSection}} elevation={3}>
        <Image src={authImage} alt="Login image" width={300} height={300} />
      </Paper>
      <Box sx={{...styles.centered, ...styles.rightSection}}>
        <AuthSection />
      </Box>
    </Box>
  );
};

export default Authenticate;
