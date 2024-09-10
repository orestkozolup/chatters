"use client";

import { useGlobalState } from "@/hooks/useGlobalState";
import ChatTile from "@/components/molecules/chat-tile";

const ConversationsList = () => {
  const {
    state: { allConversations, currentConversation },
    dispatch,
  } = useGlobalState();
  return (
    <>
      {allConversations.map(({ name, image, email }) => (
        <ChatTile
          key={email}
          userName={name}
          userImageSrc={image}
          active={email === currentConversation?.email}
          onClick={() =>
            dispatch({
              type: "SET_CURRENT_CONVERSATION",
              payload: { name, image, email },
            })
          }
        />
      ))}
    </>
  );
};

export default ConversationsList;
