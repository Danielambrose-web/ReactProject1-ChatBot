import React, { useState } from "react";
import ChatData from "./ChatData";
import ChatInput from "./ChatInput";

function App() {
  const [Messages, setMessages] = useState([
    { message: "hi", sender: "user", key: "mes1" },
    { message: "hi", sender: "robot", key: "mes2" },
    { message: "what is todays date", sender: "user", key: "mes3" },
    { message: "date is april", sender: "robot", key: "mes4" },
    { message: "wow what is ai", sender: "user", key: "mes5" },
    { message: "it is an assistant", sender: "robot", key: "mes6" },
  ]);

  function sendMessage(newText) {
//  ...
  }

  return (
    <>
      <ChatInput sendMessage={sendMessage} />
      <ChatData Messages={Messages} />
    </>
  );
}

export default App;