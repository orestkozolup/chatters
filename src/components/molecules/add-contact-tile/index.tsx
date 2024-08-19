import { styles } from "./styles";
import Tile from "@/components/atoms/tile";

const AddContactTile: React.FC = (): React.ReactElement => {

  return (
    <Tile>
      <p style={styles.text}>+ Add New Contact</p>
    </Tile>
  );
};

export default AddContactTile;
