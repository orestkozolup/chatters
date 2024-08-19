import { styles } from "./styles";
import Tile from "@/components/atoms/tile";
import Link from "next/link";

const AddContactTile: React.FC = (): React.ReactElement => {
  return (
    <Link href="/add-contact">
      <Tile>
        <p style={styles.text}>+ Add New Contact</p>
      </Tile>
    </Link>
  );
};

export default AddContactTile;
