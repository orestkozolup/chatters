"use client";

import InputField from "@/components/atoms/input-field";
import Button from "@/components/atoms/button";
import { useRef } from "react";

import { searchUser } from "./searchUser";

const UserSearch = () => {


  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = async () => {
    const value = inputRef?.current?.value;

    const user = await searchUser(value as string);

    console.log('HERE7', user);
  }

  return (
    <>
      <InputField
        inputRef={inputRef}
        required={false}
        placeholder="Search by email"
      />
      <Button onClick={handleClick}>Search</Button>
    </>
  );
};

export default UserSearch;
