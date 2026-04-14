import RobotImg from "../public/robot.png";

function ChatMessage({ message, Sender }) {
  return (
    <>
      {/* {Sender === "robot" && <img src="robot.png" width="50" />}
      {message}
      {Sender === "user" && <img src="user.png" width="50" />}
      {/* <img src={RobotImg}/> */}

      <div>
        <img src={RobotImg} width="50" />
        hello
      </div>

      <div>
        hello
        <img src={RobotImg} width="50" />
      </div>
      <div>
        <img src={RobotImg} width="50" />
        time
      </div>
      <div>
        it is 1030pm
        <img src={RobotImg} width="50" />
      </div>

      
    </>
  );
}

export default ChatMessage;
