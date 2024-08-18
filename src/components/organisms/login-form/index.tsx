"use client";

import Box from "@mui/material/Box";
import Button from "@/components/atoms/button";
import InputField from "@/components/atoms/input-field";
import { loginAction, handleClick } from "./loginActions";
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

  // const handleClick = async () => {
  //   "use server"
  //   // try {
  //   //   await signIn("google");
  //   // } catch (e) {
  //   // }
  // }

  return <button onClick={() => handleClick({})}>Signin with Google</button>;
};

export default LoginForm;
