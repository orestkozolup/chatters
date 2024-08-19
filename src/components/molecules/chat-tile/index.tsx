import Image from "next/image";
import Box from "@mui/material/Box";
import { styles } from "./styles";
import Tile from "@/components/atoms/tile";

interface ChatTileProps {
  userName: string;
  userImageSrc: string;
  active: boolean;
}

const ChatTile: React.FC<ChatTileProps> = ({
  userName,
  userImageSrc,
  active = false,
}): React.ReactElement => {
  const imageSrc = userImageSrc;

  return (
    <Tile active={active}>
      <Box sx={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt="User image"
          width={40}
          height={40}
        />
      </Box>
      <Box sx={styles.textContainer}>
        <h4>{userName}</h4>
        <p style={styles.regularText}>LastMessage</p>
      </Box>
    </Tile>
  );
};

export default ChatTile;
