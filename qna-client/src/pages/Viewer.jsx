import { useParams } from "react-router-dom";
import Card from "../components/Card.jsx";
import { useState, useContext } from "react";
import { QuestionsContext } from "../_context/QuestionProvider.jsx";
import { MinxinsStyle } from "../styles/index.js";

const Viewer = () => {
  const { state, total } = useContext(QuestionsContext);
  console.log("Viewer[state]: ", state);

  const [currentIndex, setCurrentIndex] = useState(0);
  const params = useParams();
  console.log(params);

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const nextCard = () => {
    if (currentIndex < state.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="viewer">
      <MinxinsStyle.CardContainer>
        <Card
          question={state.questions[currentIndex]?.content.question}
          answer={state.questions[currentIndex]?.content.answer}
          index={currentIndex + 1}
          total={total}
          prevCard={prevCard}
          nextCard={nextCard}
          flipped={false}
        />
      </MinxinsStyle.CardContainer>
    </div>
  );
};

export default Viewer;
