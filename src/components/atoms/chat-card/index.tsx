import Image from "next/image";
import Box from "@mui/material/Box";
import { styles } from "./styles";

interface ChatCardProps {
  userName: string;
  userImageSrc: string;
  active: boolean;
}

const ChatCard: React.FC<ChatCardProps> = ({
  userName,
  userImageSrc,
  active = false
}): React.ReactElement => {
  const imageSrc = userImageSrc;

  return (
    <Box sx={{ ...styles.root, ...(active ? styles.activeRoot : {}) }}>
      <Image
        src={imageSrc}
        alt="User image"
        width={40}
        height={40}
        style={styles.image}
      />
      <Box sx={styles.textContainer}>
        <h4>{userName}</h4>
        <p style={styles.regularText}>LastMessage</p>
      </Box>
    </Box>
  );
};

export default ChatCard;
