import React, { useState } from "react";
import ChatData from "./components/ChatData";
import ChatInput from "./components/ChatInput";
import "./App.css";

function App() {
  const [Messages, setMessages] = useState([
    { message: "hi", sender: "user", key: "mes1" },
    { message: "hi", sender: "robot", key: "mes2" },
    { message: "what is todays date", sender: "user", key: "mes3" },
    { message: "date is april", sender: "robot", key: "mes4" },
    { message: "wow what is ai", sender: "user", key: "mes5" },
    { message: "it is an assistant", sender: "robot", key: "mes6" },
  ]);

  return (
    <div className="app-container">
      <ChatData Messages={Messages} />
      <ChatInput setMessages={setMessages} />
    </div>
  );
}

export default App;
