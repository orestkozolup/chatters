"use client";

import InputField from "@/components/atoms/input-field";
import Button from "@/components/atoms/button";
import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import ChatTile from "@/components/molecules/chat-tile";
import { useGlobalState } from "@/hooks/useGlobalState";
import { useRouter } from "next/navigation";

import { searchUser } from "./searchUser";
import { styles } from "./styles";

interface User {
  name: string;
  image: string;
  email: string;
}

const UserSearch = () => {
  const [searchResult, setSearchResult] = useState<User | null>(null);

  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = async () => {
    const value = inputRef?.current?.value;

    try {
      const user = await searchUser(value as string);
      setSearchResult(user);
    } catch (e) {
      setSearchResult(null);
    }
  };

  const { dispatch } = useGlobalState();

  const handleTileClick = () => {
    const payload = {
      image: searchResult?.image,
      name: searchResult?.name,
      email: searchResult?.email,
    };

    console.log("HERE2.1", payload);
    dispatch({
      type: "SET_CURRENT_CONVERSATION",
      payload,
    });

    router.push("/users");
  };

  return (
    <Box>
      <Box sx={styles.root}>
        <InputField
          inputRef={inputRef}
          required={false}
          placeholder="Search by email"
        />
        <Button onClick={handleClick}>Search</Button>
      </Box>
      {searchResult && (
        <ChatTile
          userName={searchResult.name}
          userImageSrc={searchResult.image}
          onClick={handleTileClick}
        />
      )}
    </Box>
  );
};

export default UserSearch;
