"use client";

import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";

import { styles } from "./styles";
import React from "react";

interface UserIconButtonProps {
  userImageSrc: string;
}

const UserIconButton: React.FC<UserIconButtonProps> = ({
  userImageSrc,
}): React.ReactElement => {
  return (
    <Link href="/profile">
      <Box sx={styles.imageContainer}>
        <Image src={userImageSrc} alt="User image" width={30} height={30} />
      </Box>
    </Link>
  );
};

export default UserIconButton;
