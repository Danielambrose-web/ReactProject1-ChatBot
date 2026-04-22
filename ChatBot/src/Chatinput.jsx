import Messages from "./ChatData.jsx";
import React, { useState } from "react";

function ChatInput() {
  const [inputText, setInputText] = useState("");
  function saveTextInput(input) {
    setInputText(input.target.value);
  }
  function sendMessage() {
    console.log(inputText);
  }
  return (
    <>
      <input placeholder="send message" size="50" onChange={saveTextInput} />
      <button onClick={sendMessage}>Send</button>
    </>
  );
}

export default ChatInput;
