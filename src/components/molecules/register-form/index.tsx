import Box from "@mui/material/Box";
import InputField from "@/components/atoms/input-field";
import { styles } from "./styles";

const RegisterForm = () => {
  return (
    <Box sx={styles.root}>
      <InputField label="Username" required />
      <InputField label="Email" required />
      <InputField label="Password" required />
      <InputField label="Confirm Password" required />
    </Box>
  );
};

export default RegisterForm;
