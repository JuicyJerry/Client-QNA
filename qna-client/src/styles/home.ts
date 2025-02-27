import styled from "@emotion/styled";

export const HomeContainer = styled.section`
  width: 100%;

  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & .container {
    width: 100%;
    min-height: 400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & h1 {
    font-size: 32px;
  }
  & .content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    min-height: 150px;
    align-items: baseline;
    justify-content: center;
  }
`;

export default {
  HomeContainer,
};
