    import RobotImg from "../public/robot.png";
    import UserImg from "./assets/user.png";

    function ChatMessage({ message, sender }) {

      return (
        <div>
          {sender === "robot" && <img src={RobotImg} width="50" />}
          {message}
          {sender === "user" && <img src={UserImg} width="50" />}
        </div>
      );
    }

    export default ChatMessage;
