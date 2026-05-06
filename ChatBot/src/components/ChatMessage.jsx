    import RobotImg from "../assets/robot.png";
    import UserImg from "../assets/user.png";
    import './ChatMessage.css'

    function ChatMessage({ messageChats, sender }) {

      return (
    <div className={
      sender === 'user'
        ? 'chat-message-user'
        : 'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img src={RobotImg} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {messageChats}
      </div>
      {sender === 'user' && (
        <img src={UserImg} className="chat-message-profile" />
      )}
    </div>
      );
    }

    export default ChatMessage;
