import React from "react";
import Header from "@/components/molecules/header";
import UserSearch from "@/components/organisms/user-search";

interface AuthorizedLayoutProps {
  children: React.ReactElement;
}

const AuthorizedLayout: React.FC<AuthorizedLayoutProps> = ({ children }) => {
  return (
    <>
      <Header centralContent={<UserSearch />} />
      <div>{children}</div>
    </>
  );
};

export default AuthorizedLayout;
