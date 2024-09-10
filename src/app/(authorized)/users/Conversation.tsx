"use client";

import { useGlobalState } from "@/hooks/useGlobalState";
import Box from "@mui/material/Box";
import { useRef, useState, useEffect } from "react";
import { saveMessage, fetchMessages } from "./conversationActions";
import { Message } from "@/types";

export const Conversation = () => {
  const {
    state: { currentConversation },
    dispatch,
  } = useGlobalState();

  const currentUserId = "";
  const currectReceiverId = currentConversation?.email || "";

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetchMessages(currentUserId, currectReceiverId)
      .then((res) => {
        setMessages(res as unknown as Message[]);
      })
      .catch((e) => {
        console.log("Error fetching messages:", e);
      });
  }, [currentUserId, currectReceiverId]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSendClick = () => {
    saveMessage(
      currentUserId,
      currentConversation?.email as string,
      inputRef.current?.value as string
    );

    const newMessage = {
      senderId: currentUserId,
      content: inputRef.current?.value as string,
      timestamp: Date.now(),
    } as unknown as Message;

    setMessages((prevMsgs) => [...prevMsgs, newMessage]);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

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

          <div>
            {messages.map((message) => (
              <p key={message.timestamp}>
                {message.senderId}: {message.content}
              </p>
            ))}
          </div>

          <input type="text" ref={inputRef} />
          <button onClick={handleSendClick}>Send</button>
        </div>
      ) : (
        <p>Please select a conversation or find a new user to chat with</p>
      )}
    </Box>
  );
};
