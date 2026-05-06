import React from "react";
import ChatMessage from "./ChatMessage";
// import {ChatMessage} from './ChatMessage';

function ChatData({ messageChats }) {


  return (
    <div className="chat-container">
      {messageChats.map((messageChat) => (
        <ChatMessage
          messageChats={messageChat.message}
          sender={messageChat.sender}
          key={messageChat.id}
        />
      ))}
    </div>
  );
}

export default ChatData;
