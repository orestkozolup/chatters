import Box from "@mui/material/Box";
import { styles } from "./styles";
import React from "react";

interface TileProps {
  children: React.ReactNode;
  active?: boolean;
  externalStyles?: object;
}

const Tile: React.FC<TileProps> = ({
  children,
  active = false,
  externalStyles = {},
}): React.ReactElement => {
  return (
    <Box
      sx={{
        ...styles.root,
        ...(active ? styles.activeRoot : {}),
        ...externalStyles,
      }}
    >
      {children}
    </Box>
  );
};

export default Tile;
