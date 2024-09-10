"use client";

import Box from "@mui/material/Box";

import { styles } from "./styles";
import { deleteAccount } from "./accountActions";
import React from "react";
import { signOut, auth } from "../../../../lib/firestore";

interface DeleteAccountButtonProps {
  email: string;
}

const DeleteAccountButton: React.FC<DeleteAccountButtonProps> = ({ email }) => {

  const handleClick = () => {
    deleteAccount(email);
    signOut(auth);
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
