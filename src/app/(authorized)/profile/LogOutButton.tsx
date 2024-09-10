"use client";

import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";

import { styles } from "./styles";
import { signOut, auth } from "../../../../lib/firestore";

const LogOutButton = () => {
  const router = useRouter();

  const hangleLogOut = () => {
    signOut(auth);
    router.push("/auth");
  };

  return (
    <Box sx={{ ...styles.card, ...styles.actionCard }} onClick={hangleLogOut}>
      Log out
    </Box>
  );
};

export default LogOutButton;
