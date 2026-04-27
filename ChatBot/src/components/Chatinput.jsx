import React, { useState } from "react";
import "./Chatinput.css";
import ChatMessage from "./ChatMessage";

function ChatInput({ Messages, setMessages }) {
  const [inputText, setInputText] = useState("");

  function saveTextInput(e) {
    setInputText(e.target.value);
  }

  function sendMessage() {
const newMessage = [
  ...ChatMessage,{
    Messages: inputText,
    sender: 'user',
    id : crypto.randomUUID()
  }

];

setMessages(newMessage)
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