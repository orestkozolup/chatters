import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputField from "@/components/atoms/input-field";
import { styles } from "./styles";

interface LoginFormProps {
  loginAction: (formData: FormData) => Promise<void>;
}

const LoginForm: React.FC<LoginFormProps> = ({
  loginAction,
}): React.ReactElement => {
  return (
    <form action={loginAction}>
      <Box sx={styles.root}>
        <InputField label="Email" name="email" required />
        <InputField label="Password" name="password" required />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
