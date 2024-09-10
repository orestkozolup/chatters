import Box from "@mui/material/Box";
import { styles } from "./styles";
import React from "react";

interface TileProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  externalStyles?: object;
}

const Tile: React.FC<TileProps> = ({
  children,
  onClick,
  active = false,
  externalStyles = {},
}): React.ReactElement => {
  return (
    <Box
      onClick={onClick}
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
