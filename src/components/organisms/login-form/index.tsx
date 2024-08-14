"use client";

import Box from "@mui/material/Box";
import Button from "@/components/atoms/button";
import InputField from "@/components/atoms/input-field";
import { loginAction } from "./loginActions";
import { useState } from "react";
import { styles } from "./styles";

const LoginForm: React.FC = (): React.ReactElement => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<any | null>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.target);

    const result = await loginAction(formData);

    if (result.errors) {
      setError(result.errors);
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={styles.root}>
        <InputField
          label="Email"
          name="email"
          error={error?.email?.[0]}
          required
        />
        <InputField
          label="Password"
          name="password"
          error={error?.password?.[0]}
          required
        />
        <Button variant="contained" type="submit" disabled={isSubmitting}>
          Login
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
