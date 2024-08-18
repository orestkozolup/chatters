import React from "react";
import Header from "@/components/molecules/header";
import UserSearch from "@/components/organisms/user-search";

interface UsersLayoutProps {
  children: React.ReactElement;
}

const UsersLayout: React.FC<UsersLayoutProps> = ({ children }) => {
  return (
    <>
      <Header centralContent={<UserSearch />} />
      <div>{children}</div>
    </>
  );
};

export default UsersLayout;
