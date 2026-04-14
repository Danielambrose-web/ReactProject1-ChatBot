import React from "react";
import ReactDOM from "react-dom/client";

import ChatInput from "./Chatinput";

import ChatData from "./ChatData";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChatData />
    <ChatInput />
  </React.StrictMode>,
);
