import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import authImage from"../../../../public/images/auth.png";
import { styles } from "./styles";

interface AuthLayoutProps {
  children: React.ReactElement
}

const AuthTemplate: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Box sx={styles.root}>
      <Paper sx={{...styles.centered, ...styles.leftSection}} elevation={3}>
        <Image src={authImage} alt="Login image" width={300} height={300} />
      </Paper>
      <Box sx={{...styles.centered, ...styles.rightSection}}>
          {children}
      </Box>
    </Box>
  );
};

export default AuthTemplate;
