import { useParams } from "react-router-dom";
import Card from "../components/Card.jsx";
import { useState, useContext, memo } from "react";
import { QnaStateContext } from "../App.js";
import { MinxinsStyle } from "../styles/index.js";

const Viewer = memo(() => {
  const qnas = useContext(QnaStateContext);
  if (!qnas) throw new Error("[Viewer]qnas is not found");
  console.log("Viewer[state]: ", qnas);

  const [currentIndex, setCurrentIndex] = useState(0);
  const params = useParams();
  console.log(params);

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const nextCard = () => {
    if (currentIndex < qnas.state.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="viewer">
      <MinxinsStyle.CardContainer>
        <Card
          question={qnas.state?.questions[currentIndex]?.content.question}
          answer={qnas.state?.questions[currentIndex]?.content.answer}
          index={currentIndex + 1}
          total={qnas.state?.questions.length}
          prevCard={prevCard}
          nextCard={nextCard}
          flipped={false}
        />
      </MinxinsStyle.CardContainer>
    </div>
  );
});

export default Viewer;
