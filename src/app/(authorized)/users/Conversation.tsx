"use client";

import { useGlobalState } from "@/hooks/useGlobalState";
import Box from "@mui/material/Box";

export const Conversation = () => {
  const {
    state: { currentConversation },
    dispatch,
  } = useGlobalState();

  console.log("HERE2", currentConversation);

  return (
    <Box>
      {currentConversation ? (
        <div>
          <p>Talk to {currentConversation.name}</p>
          <button
            onClick={() => dispatch({ type: "UNSET_CURRENT_CONVERSATION" })}
          >
            Close conversation
          </button>
        </div>
      ) : (
        <p>Please select a conversation or find a new user to chat with</p>
      )}
    </Box>
  );
};
