import Messages from "./ChatData.jsx";
import React, { useState } from "react";
import "./Chatinput.css";

function ChatInput() {
  const [inputText, setInputText] = useState("");
  function saveTextInput(input) {
    setInputText(input.target.value);
  }
  function sendMessage() {
    console.log(inputText);
  }
  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="send message"
        size="50"
        onChange={saveTextInput}
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default ChatInput;
