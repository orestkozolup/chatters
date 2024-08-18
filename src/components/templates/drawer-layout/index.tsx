import Box from "@mui/material/Box";

import { styles } from "./styles";
import React from "react";

interface DrawerLayoutProps {
  drawerContent: React.ReactElement;
  pageContent: React.ReactElement;
}

const DrawerLayout: React.FC<DrawerLayoutProps> = ({
  drawerContent,
  pageContent,
}) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.drawerContainer}>{drawerContent}</Box>
      <Box>{pageContent}</Box>
    </Box>
  );
};

export default DrawerLayout;
