import AddContactTile from "@/components/molecules/add-contact-tile";
import { Conversation } from "./Conversation";
import ConversationsList from "@/components/organisms/conversations-list";
import DrawerLayout from "@/components/templates/drawer-layout";
import { ProtectedPage } from "@/components/organisms/protected-page";

const UsersPage = () => {
  return (
    <ProtectedPage>
      <DrawerLayout
        drawerContent={
          <>
            <AddContactTile />
            <ConversationsList />
          </>
        }
        pageContent={<Conversation />}
      />
    </ProtectedPage>
  );
};

export default UsersPage;
