"use client";

import InputField from "@/components/atoms/input-field";
import Button from "@/components/atoms/button";
import { useRef } from "react";
import Box from "@mui/material/Box";

import { searchUser } from "./searchUser";
import { styles } from "./styles";

const UserSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = async () => {
    const value = inputRef?.current?.value;

    const user = await searchUser(value as string);
  };

  return (
    <Box sx={styles.root}>
      <InputField
        inputRef={inputRef}
        required={false}
        placeholder="Search by email"
      />
      <Button onClick={handleClick}>Search</Button>
    </Box>
  );
};

export default UserSearch;
