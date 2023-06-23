import { CopyOutlined } from "@ant-design/icons";
import "./index.css";
const PrmoptWord = ({ promptWord, onCopy }) => {
  const { title, content } = promptWord;
  return (
    <div className="PromptWord">
      <div className="title">{title}</div>
      <div className="content g-white-space-pre-wrap">
        {content}
        <CopyOutlined className="copy" onClick={() => onCopy(content)} />
      </div>
    </div>
  );
};

export default PrmoptWord;
