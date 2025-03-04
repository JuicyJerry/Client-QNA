import styled from "@emotion/styled";

export const DetailResultContainer = styled.div`
  .result-page {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #757575;
    border-radius: 5px;
    padding: 20px;
    min-width: 500px;
    height: 100%;
  }
  h1 {
    font-size: 28px;
    font-weight: 600;
  }
  .message-title {
    text-decoration: underline;
  }
  .result-section {
    display: flex;
    justify-content: space-between;
  }
  .result-section p {
    color: red;
  }
  .result-section button {
    font-size: 12px;
  }
  .next-section {
    display: flex;
    justify-content: space-between;
  }
  .next-section button {
    font-size: 12px;
  }
`;
export const DetailContainer = styled.div`
  .detail-layout {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .navigation {
    display: flex;
    justify-content: center;
    gap: 70px;
  }
  .navigation button[disabled] {
    color: #7575;
  }
`;

export const DetailCardContainer = styled.div`
  .card {
    min-width: 500px;
    width: 100%;
    height: 500px;
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
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-top: 1px solid #4541411a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: #757575;
    border-radius: 5px;
  }

  .card-back {
    transform: rotateY(180deg);
  }
  .card-front h3,
  .card-back p {
    font-weight: 600;
    font-size: 28px;
  }

  button:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

export default {
  DetailResultContainer,
  DetailContainer,
  DetailCardContainer,
};
