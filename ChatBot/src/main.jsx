import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ChatInput from "./Chatinput";
import ChatMessage from "./App";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatMessage  message='hi' sender='user'/>
    <ChatMessage message='hi' sender='robot' />
    <ChatMessage message='what is todays date' sender='user'/>
    <ChatMessage message='date is april' sender='robot'/>
    <ChatMessage message='wow what is ai ' sender='user'/>
    <ChatMessage message='it is an asistance' sender='robot'/>
    <ChatInput/>
  </React.StrictMode>,
)
