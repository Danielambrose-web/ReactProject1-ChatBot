
import App from "../App.jsx";
import ChatMessage from "./ChatMessage"; 


function ChatData({ Messages }) {
  return (
    <div>
      {Messages.map((msg) => (
        <ChatMessage key={msg.key} sender={msg.sender} message={msg.message} />
      ))}
    </div>
  );
}

export default ChatData;
