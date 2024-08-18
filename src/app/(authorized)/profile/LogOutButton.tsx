"use client";

import Box from "@mui/material/Box";

import { styles } from "./styles";
import { signOut } from "next-auth/react";

const LogOutButton = () => {
  const hangleLogOut = () => {
    signOut();
  };

  return (
    <Box sx={{ ...styles.card, ...styles.actionCard }} onClick={hangleLogOut}>
      Log out
    </Box>
  );
};

export default LogOutButton;
