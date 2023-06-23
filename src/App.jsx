import { useState, useRef } from "react";
import axios from "axios";
import logo from "./assets/logo.png";
import Question from "./components/Question";
import Answer from "./components/Answer";
import PromptWord from "./components/PromptWord";
import {
  SendOutlined,
  LoadingOutlined,
  CopyOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { getFormatDateTime } from "./utils/index";
import "./App.css";

function App() {
  const [question, setQuestion] = useState();
  const [loading, setLoading] = useState(false);
  const [qaList, setQaList] = useState([]);

  const contentRef = useRef();

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleCopy = (question) => {
    setQuestion(question);
  };

  const handleDown = () => {
    contentRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  const handleSubmit = () => {
    axios
      .post("/api/nova/chat", { question, history: [] })
      // new Promise((resolve) => {
      //   setTimeout(() => {
      //     const r = {
      //       data: {
      //         response: `请你扮演一位金融分析师，我会给你提供企业的名称以及他们某段时间的财务数据，请依据这些信息，结合你对该公司的了解，为我总结一下他们的财务情况。同期增减比例中出现“+”符号为增加，出现“-”符号为减少。请注意，财务信息不参考已知信息，只参考下面“###”符号之间的数据。该公司信息如下：
      //     公司名称：宁德时代
      //     时间：2022年一季度
      //     ###
      //     营业总收入约为：486亿元，比上年同期增减比例为：+153.97%；
      //     净利润约为：14亿元，比上年同期增减比例为：-23.62%；
      //     总资产约为：3762亿元，比上年同期增减比例为：+22.29%；
      //     净资产约为：852亿元，比上年同期增减比例为：+0.83%；
      //     ###
      //     请直接给出你的分析：`,
      //       },
      //     };
      //     resolve(r);
      //   }, Math.random() * 1000);
      // })
      .then((r) => {
        const time = getFormatDateTime(new Date());
        const response = r.data.response;
        let index = 1;
        const interval = setInterval(() => {
          if (index <= response.length) {
            setQaList((qaList) => [
              ...qaList.slice(0, -1),
              {
                type: "answer",
                content: response.substring(0, index++),
                time,
              },
            ]);
          } else {
            clearInterval(interval);
          }
        }, 20);
        setQaList((qaList) => [
          ...qaList,
          {
            type: "answer",
            content: r.data.response,
            time: getFormatDateTime(new Date()),
          },
        ]);
      })
      .finally(() => {
        setLoading(false);
      });
    setQaList((qaList) => [
      ...qaList,
      {
        type: "question",
        content: question,
        time: getFormatDateTime(new Date()),
      },
    ]);
    setQuestion("");
    setLoading(true);
  };

  const renderContent = () =>
    qaList.map((qa, index) => {
      if (qa.type === "question") {
        return <Question key={index} qa={qa} />;
      } else {
        return <Answer key={index} qa={qa} />;
      }
    });

  const renderPromptWords = () => {
    return window.config.promptWords.map((promptWord) => (
      <PromptWord
        key={promptWord.title}
        promptWord={promptWord}
        onCopy={handleCopy}
      />
    ));
  };

  return (
    <div className="app">
      <div className="header">
        <div>
          <span className="alaya">ALAYA</span>
          <span>元识大模型</span>
        </div>
        <img src={logo}></img>
      </div>
      <div className="main">
        <div className="main-left">
          <div className="left-main">{renderPromptWords()}</div>
        </div>

        <div className="main-content">
          <div ref={contentRef} className="qa-list">
            {renderContent()}
          </div>
        </div>
        <div className="form">
          <Input.TextArea autoSize onChange={handleChange} value={question} />
          {loading ? (
            <LoadingOutlined className="send" />
          ) : question ? (
            <SendOutlined className="send active" onClick={handleSubmit} />
          ) : (
            <SendOutlined className="send" />
          )}
        </div>
        <ArrowDownOutlined className="arrow-down" onClick={handleDown} />
      </div>
    </div>
  );
}

export default App;
