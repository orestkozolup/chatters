"use client"

import { useGlobalState } from "@/hooks/useGlobalState";
import Box from "@mui/material/Box";

export const Conversation = () => {
  const {
    state: { currentConversation },
  } = useGlobalState();

  console.log('HERE2', currentConversation)

  return (
    <Box>
      {currentConversation ? (
        <p>Talk to {currentConversation.name}</p>
      ) : (
        <p>Please select a conversation or find a new user to chat with</p>
      )}
    </Box>
  );
};
