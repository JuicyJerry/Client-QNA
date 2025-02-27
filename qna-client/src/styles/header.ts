import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 100vh;
  background-color: #24292e;

  .titles-container {
    max-width: 500px;
    max-height: 300px;
    height: 100%;
  }

  h3.title {
    color: #fff;
    font-size: 32px;
  }
  h3.title + p {
    color: rgba(255, 255, 255, 0.85);
    font-size 18px;
    margin: 24px 0 80px 0;
  }

  .btns {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn {
    padding: 4px 20px 4px;
    font-size: 11px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    font-size: 9px;
  }
  .btn-outline-success {
    color: #0051ff;
    background-color: transparent;
    background-image: none;
    border: 1px solid #0051ff;
  }
  .btn-round {
    border-radius: 20rem;
  }

  img {
    border-radius: 5px;
  }
`;

export default {
  HeaderContainer,
};
