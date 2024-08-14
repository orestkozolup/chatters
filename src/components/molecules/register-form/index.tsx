import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputField from "@/components/atoms/input-field";
import { styles } from "./styles";

interface RegisterFormProps {
  registerAction: (formData: FormData) => Promise<void>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  registerAction,
}): React.ReactElement => {
  return (
    <form action={registerAction}>
      <Box sx={styles.root}>
        <InputField label="Username" name="username" required />
        <InputField label="Email" name="email" required />
        <InputField label="Password" name="password" required />
        <InputField label="Confirm Password" name="confirm_password" required />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default RegisterForm;
