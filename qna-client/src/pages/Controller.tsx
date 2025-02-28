import React, { useState, useRef, useContext } from "react";
import { QnaStateContext, QnaDispatchContext } from "../App.tsx";
import { ControllerStyle } from "../styles/index.js";
// import { useQnaActions } from "../_actions/index";

// interface EventHandler {
//   onChangeInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
// }

const Controller = () => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const qnas = useContext(QnaStateContext);
  if (!qnas) throw new Error("[useQnaActions]QnaDispatchContext is not found");
  const idRef = useRef(qnas.questions.length);

  const { onCreate } = useContext(QnaDispatchContext)!;
  // const { onCreate } = useQnaActions();
  if (!qnas) throw new Error("[Controller]qnas is not found");
  if (!onCreate) throw new Error("[Controller]onCreate is not found");

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "question") {
      setQuestion(e.target.value);
    } else {
      setAnswer(e.target.value);
    }
  };

  const onClickButton = () => {
    onCreate({
      id: `q-${idRef.current++}`,
      content: {
        question: question,
        answer: answer,
      },
      isDone: true,
    });
    alert(`퀴즈가 추가되었습니다.\n 총 ${idRef.current}개 입니다.`);
    setQuestion("");
    setAnswer("");
  };

  return (
    <div
      style={{ display: "flex", gap: "20px", flexDirection: "column" }}
      className="controller"
    >
      <h3>새로운 낱말카드 세트 만들기</h3>
      <div style={{ display: "flex", gap: "20px" }}>
        <ControllerStyle.ControllerQuestion>
          <div className="question">
            <label className="sr-only" htmlFor="question">
              Question:{" "}
            </label>
            <input
              onChange={onChangeInput}
              type="text"
              name="question"
              id="question"
              value={question}
            />
            {question.length < 5 && (
              <span className="warning">5글자 이상 입력해주세요</span>
            )}
          </div>
        </ControllerStyle.ControllerQuestion>

        <ControllerStyle.ControllerAnswer>
          <div className="answer">
            <label className="sr-only" htmlFor="answer">
              Answer:{" "}
            </label>
            <textarea
              onChange={onChangeInput}
              id="answer"
              name="answer"
              rows={5}
              cols={33}
              value={answer}
            ></textarea>
            {answer.length < 5 && (
              <span className="warning">5글자 이상 입력해주세요</span>
            )}
          </div>
        </ControllerStyle.ControllerAnswer>

        <ControllerStyle.ControllerSaveButton>
          <div className="save">
            <button
              onClick={() => {
                if (question.length >= 5 && answer.length >= 5) {
                  onClickButton();
                } else {
                  alert("먼저, Question과 Answer를 입력해주세요.");
                }
              }}
              type="button"
            >
              추가
            </button>
          </div>
        </ControllerStyle.ControllerSaveButton>
      </div>
    </div>
  );
};

export default Controller;
