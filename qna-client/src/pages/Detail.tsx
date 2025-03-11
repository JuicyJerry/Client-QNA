// import { QnaStateContext } from "../App.js";
import { QnaStateContext } from "../_context/index";
import { useState, useContext, memo } from "react";
import { useNavigate } from "react-router-dom";
import DetailCard from "../components/DetailCard";
import { useParams } from "react-router-dom";
// import { useKeyPress } from "../hooks/useKeyPress"; // 방향키 이벤트 훅

const Detail = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [correctAnswers, setCorrectAnswers] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const qnas = useContext(QnaStateContext);
  const item = qnas?.questions.find((el) => el.id.toString() === id);

  console.log("[Detail]item --->", item);

  if (!item) {
    return <p>데이터를 찾을 수 없습니다.</p>;
  }

  const handleKeyPress = (direction: string) => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (
      qnas &&
      direction === "right" &&
      currentIndex < qnas?.questions.length - 1
    ) {
      setCurrentIndex(currentIndex + 1);
    } else if (qnas && currentIndex === qnas?.questions.length - 1) {
      navigate("/detailResult", {
        state: {
          totalQuestions: qnas?.questions.length - 1,
          // correctAnswers: correctAnswers,
        },
      });
    }
  };

  return (
    <div className="detail-layout">
      <div className="question-card-container">
        <DetailCard question={qnas && qnas?.questions[currentIndex]} />
      </div>
      <div className="navigation">
        <button
          disabled={currentIndex === 0}
          onClick={() => handleKeyPress("left")}
        >
          ← Previous
        </button>
        <span>
          {currentIndex + 1} / {qnas?.questions.length}
        </span>
        <button
          // disabled={currentIndex === qnas?.questions.length - 1}
          onClick={() => handleKeyPress("right")}
        >
          Next →
        </button>
      </div>
    </div>
  );
});

export default Detail;
