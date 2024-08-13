import Paper from '@mui/material/Paper';
import InputField from "@/components/atoms/input-field";
import { styles } from './styles';

const LoginForm = () => {
  return (
    <Paper sx={styles.root}>
      <InputField label="Email" required />
      <InputField label="Password" required />
    </Paper>
  );
};

export default LoginForm;
