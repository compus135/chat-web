import "./index.css";
const Answer = (props) => {
  const { qa } = props;
  return (
    <div className="answer">
      <div>
        <span className="alaya">Alaya</span>
      </div>
      <div>
        <div className="answer-wrapper">
          <div className="answer-main">
            <p className="time">{qa.time}</p>
            <div className="content">{qa.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
