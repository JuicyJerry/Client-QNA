import React, { useState, useEffect, memo } from "react";
import { DetailCardStyle } from "../styles";
import { Qna } from "../types/types";

const DetailCard = memo(({ question }: { question: Qna }) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " ") {
      setFlipped(!flipped);
    }
  };

  useEffect(() => {
    console.log("[DetailCard]question ===> ", question);
  }, []);

  return (
    <DetailCardStyle.DetailCardContainer>
      <div
        className={`card ${flipped ? "flipped" : ""}`}
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div className="card-inner">
          <div className="card-front">
            <h3>{question.content.question}</h3>
          </div>
          <div className="card-back">
            <p>{question.content.answer}</p>
          </div>
        </div>
      </div>
    </DetailCardStyle.DetailCardContainer>
  );
});

export default DetailCard;
