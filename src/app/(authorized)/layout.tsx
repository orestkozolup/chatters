import React from "react";
import Header from "@/components/molecules/header";

interface AuthorizedLayoutProps {
  children: React.ReactElement;
}

const AuthorizedLayout: React.FC<AuthorizedLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default AuthorizedLayout;
