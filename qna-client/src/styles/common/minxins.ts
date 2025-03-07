// 공통 css
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const CardContainer = styled.div`
  box-sizing: border-box;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // border: 1px solid #000;
  border-radius: 4px;
  padding: 10px;
  transition: all 1.3s ease-in-out;
  transform: rotateY(0deg);
  position: relative;

  h3 {
    font-size: 20px;
  }

  .flipButtons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  .flipped {
    transform: rotateY(360deg);
    transition: all 1.3s ease-in-out;
  }
`;

const CardQuestion = styled.div`
  .question {
    width: 100%;
    margin: 0 auto;
    // margin-bottom: auto;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
  }
  .question button {
    width: 50px;
    height: 40px;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    background-color: transparent;
    color: #fff;
    border: 0;
    font-weight: 700;
  }
  .question button[name="prev"] {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .question button[name="next"] {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

const CardAnswer = styled.div`
  .answer {
    width: 100%;
    display: flex;
    flex-direction: column;
    // margin-bottom: auto;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }
  .answer button {
    width: 50px;
    height: 40px;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    background-color: transparent;
    color: #fff;
    border: 0;
    font-weight: 700;
  }
  .answer button[name="prev"] {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .answer button[name="next"] {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const cardStyle = css`
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const detailCardStyle = css`
  /* 카드 뒤집기 애니메이션 */
  .card {
    width: 100%;
    height: 300px;
    perspective: 1000px;
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }

  .card.flipped .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .card-back {
    transform: rotateY(180deg);
  }

  button:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

export const ResultStyle = css`
  .result-page {
    text-align: center;
  }

  .message-title {
    font-size: 20px;
    margin: 20px 0;
  }

  .result-section,
  .next-section {
    margin: 20px 0;
  }

  button {
    background-color: #50a1ff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #3577c4;
  }

  button:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

export default {
  CardContainer,
  CardQuestion,
  CardAnswer,
  flexCenter,
  cardStyle,
  detailCardStyle,
  ResultStyle,
};
