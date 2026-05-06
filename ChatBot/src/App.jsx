import React, { useState } from "react";
import ChatData from "./components/ChatData";
import ChatInput from "./components/ChatInput";
import "./App.css";

function App() {
  const [messageChats, setMessages] = useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can I help you?",
      sender: "robot",
      id: "id2",
    },
    {
      message: "can you get me todays date?",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is September 27",
      sender: "robot",
      id: "id4",
    },
  ]);

  return (
    <div className="app-container">
      <ChatData messageChats={messageChats} />
      <ChatInput messageChats={messageChats} 
      setMessages={setMessages} />
    </div>
  );
}

export default App;
