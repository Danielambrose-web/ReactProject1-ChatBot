import React, { useState } from "react";
import "./Chatinput.css";
import { getBotResponse } from "./Chatbot";

function ChatInput({ setMessages }) {
  const [inputText, setInputText] = useState("");

  function saveTextInput(e) {
    setInputText(e.target.value);
  }

  function sendMessage() {
    if (!inputText.trim()) {
      return;
    }

    const userMessage = {
      message: inputText,
      sender: "user",
      key: crypto.randomUUID(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputText("");

    const botText = getBotResponse(inputText);
    console.log("Bot response:", botText);

    const botMessage = {
      message: botText,
      sender: "robot",
      key: crypto.randomUUID(),
    };

    setMessages((prevMessages) => [...prevMessages, botMessage]);
 function sendMessage() {
  if (!inputText.trim()) return;

  const userText = inputText; // store before clearing

  const userMessage = {
    message: userText,
    sender: "user",
    key: crypto.randomUUID(),
  };

  setMessages((prev) => [...prev, userMessage]);
  setInputText("");

  // get bot response
  const botText = getBotResponse(userText);
  console.log("Bot response:", botText);

  const botMessage = {
    message: botText,
    sender: "robot",
    key: crypto.randomUUID(),
  };

  setMessages((prev) => [...prev, botMessage]);
}

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="send message"
        size="50"
        value={inputText}
        onChange={saveTextInput}
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default ChatInput;
