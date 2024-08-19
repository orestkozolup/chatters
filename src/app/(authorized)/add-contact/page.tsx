import { getServerSession } from "next-auth";
import { NextAuthOptions } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../../../lib/authOptions";

import UserSearch from "@/components/organisms/user-search";

import Image from "next/image";
import Box from "@mui/material/Box";

import { styles } from './styles';

const AddContactPage = async () => {
  const session = await getServerSession(authOptions as NextAuthOptions);

  if (!session) {
    redirect("/auth");
  }

  return (
    <Box sx={styles.root}>
      <UserSearch />
    </Box>
  );
};

export default AddContactPage;
