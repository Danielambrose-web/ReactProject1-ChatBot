import React from "react";
import ChatMessage from "./ChatMessage";
// import {ChatMessage} from './ChatMessage';

function ChatData({ Messages }) {
  return (
    <div className="chat-container">
      {Messages.map((msg) => (
        <ChatMessage
          key={msg.key}
          message={msg.message}
          sender={msg.sender}
        />
      ))}
    </div>
  );
}

export default ChatData;