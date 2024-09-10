import UserSearch from "@/components/organisms/user-search";
import Box from "@mui/material/Box";
import { ProtectedPage } from "@/components/organisms/protected-page";

import { styles } from "./styles";

const AddContactPage = () => {
  return (
    <ProtectedPage>
      <Box sx={styles.root}>
        <UserSearch />
      </Box>
    </ProtectedPage>
  );
};

export default AddContactPage;
