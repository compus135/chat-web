import { UserOutlined } from "@ant-design/icons";
import "./index.css";

const Question = (props) => {
  const { qa } = props;
  return (
    <div className="question">
      <div className="question-wrapper">
        <div className="question-main">
          <p className="time">{qa.time}</p>
          <div className="content">{qa.content}</div>
        </div>
      </div>
      <div>
        <UserOutlined className="user" />
      </div>
    </div>
  );
};

export default Question;
