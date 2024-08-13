import Box from '@mui/material/Box';
import InputField from "@/components/atoms/input-field";
import { styles } from './styles';

const LoginForm = () => {
  return (
    <Box sx={styles.root}>
      <InputField label="Email" required />
      <InputField label="Password" required />
    </Box>
  );
};

export default LoginForm;
