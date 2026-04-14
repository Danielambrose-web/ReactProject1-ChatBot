import RobotImg from "../public/robot.png";
import UserImg from "./assets/user.png";

function ChatMessage({ message, sender }) {



  return (
    <div>
      {sender === "robot" && <img src={RobotImg} width="50" />}
      {message}
      {sender === "user" && <img src={UserImg} width="50" />}
      
{/* 
      <div>
        <img src={RobotImg} width="50" />
        hello
      </div>

      <div>
        hello
        <img src={RobotImg} width="50" />
      </div>
      <div>
        <img src={UserImg} width="50" />
        time
      </div>
      <div>
        it is 1030pm
        <img src={RobotImg} width="50" />
      </div> */}


    </div>
  );
}

export default ChatMessage;
