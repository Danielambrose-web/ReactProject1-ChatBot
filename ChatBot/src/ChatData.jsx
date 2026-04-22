import ChatMessage from "./ChatMessage.jsx";
import React, { useState } from "react";

function ChatData() {
  const array = useState([
    { message: "hi", sender: "user", key: "mes1" },
    { message: "hi", sender: "robot", key: "mes2" },
    { message: "what is todays date", sender: "user", key: "mes3" },
    { message: "date is april", sender: "robot", key: "mes4" },
    { message: "wow what is ai", sender: "user", key: "mes5" },
    { message: "it is an assistant", sender: "robot", key: "mes6" },
  ]);
  const [Messages, setMessages] = array;

 

  function sendMessage() {
 

  }
  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>

      {Messages.map((msg) => (
        <ChatMessage key={msg.key} sender={msg.sender} message={msg.message} />
      ))}
    </div>
  );
}

export default ChatData;
