import React, { useState } from "react";
import "./Chatinput.css";
import { getBotResponse } from "./Chatbot";

function ChatInput({ messageChats, setMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(e) {
    setInputText(e.target.value);
  }
  function sendMessage() {
    const newMessages = [
      ...messageChats,
      {
        messageChats: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setMessages(newMessages);

    const response = getBotResponse.getResponse(inputText);
    setMessages([
      ...newMessages,
      {
       messageChats: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="send message"
        size="50"
        value={inputText}
        onChange={saveInputText}
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default ChatInput;
