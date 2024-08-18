"use client";

import Box from "@mui/material/Box";

import { styles } from "./styles";
import { handleDelete } from "./accountActions";
import React from "react";

interface DeleteAccountButtonProps {
  email: string;
}

const DeleteAccountButton: React.FC<DeleteAccountButtonProps> = ({ email }) => {
  return (
    <Box
      sx={{ ...styles.card, ...styles.actionCard }}
      onClick={() => handleDelete(email)}
    >
      Delete Account
    </Box>
  );
};

export default DeleteAccountButton;
