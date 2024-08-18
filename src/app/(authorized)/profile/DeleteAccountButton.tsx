"use client";

import Box from "@mui/material/Box";

import { styles } from "./styles";
import { deleteAccount } from "./accountActions";
import React from "react";
import { signOut } from "next-auth/react";

interface DeleteAccountButtonProps {
  email: string;
}

const DeleteAccountButton: React.FC<DeleteAccountButtonProps> = ({ email }) => {

  const handleClick = () => {
    deleteAccount(email);
    signOut({ callbackUrl: 'http://localhost:3000/auth' });
  }
  return (
    <Box
      sx={{ ...styles.card, ...styles.actionCard }}
      onClick={handleClick}
    >
      Delete Account
    </Box>
  );
};

export default DeleteAccountButton;
