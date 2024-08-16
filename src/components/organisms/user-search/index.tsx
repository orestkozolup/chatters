"use client";

import InputField from "@/components/atoms/input-field";
import Button from "@/components/atoms/button";
import { useRef } from "react";

const UserSearch = () => {


  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = async () => {
    const value = inputRef?.current?.value;

    console.log('HERE7', value);
  }

  return (
    <>
      <InputField
        ref={inputRef}
        required={false}
        placeholder="Username or email"
      />
      <Button onClick={handleClick}>Search</Button>
    </>
  );
};

export default UserSearch;
