import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const DetailResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalQuestions, correctAnswers } = location.state || {};

  return (
    <div className="result-page">
      <h1>Quiz Result</h1>
      <div className="message-title">
        {correctAnswers === totalQuestions ? (
          <p>모든 문제를 완료하셨습니다!</p>
        ) : (
          <p>잘 했어요! 다시 도전해 보세요!</p>
        )}
      </div>
      <div className="result-section">
        <p>
          {correctAnswers} / {totalQuestions}
        </p>
        <button onClick={() => navigate("/detail")}>
          마지막 문제로 돌아가기
        </button>
      </div>
      <div className="next-section">
        <button onClick={() => navigate("/list")}>다른 문제 풀어보기</button>
        <button onClick={() => navigate("-1")}>낱말카드 재시작</button>
      </div>
    </div>
  );
};

export default DetailResult;
