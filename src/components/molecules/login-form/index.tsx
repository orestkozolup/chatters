"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputField from "@/components/atoms/input-field";
import { useState } from "react";
import { styles } from "./styles";

interface LoginFormProps {
  loginAction: (formData: FormData) => any;
}

const LoginForm: React.FC<LoginFormProps> = ({
  loginAction,
}): React.ReactElement => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<any | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Prevent default form submission

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData(event.target);

    const result = await loginAction(formData); // Call your server action

    if (result.errors) {
      setError(result.errors)
    } else {
      setSuccess("Sign up successful!");
    }
    setIsSubmitting(false);
  };

  console.log('HERE4', error)

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={styles.root}>
        <InputField label="Email" name="email" required />
        <InputField label="Password" name="password" error={error?.['password']?.[0]} required />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
