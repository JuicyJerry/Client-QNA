import styled from "@emotion/styled";

export const ListContainer = styled.div`
  header {
    text-align: center;
    padding-top: 50px;
  }
  h2 {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 30px;
  }
  h2 + p {
    font-size: 17px;
    color: #757575;
  }
  section.list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 1140px;
    height: calc(100vh - 500px);
    margin: 10px auto;
    overflow: hidden;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    max-height: 200px;
    overflow-y: scroll;
  }
  ul::-webkit-scrollbar {
    width: 1px;
    height: 5px;
  }
  ul::-webkit-scrollbar-thumb {
    background: rgb(24, 21, 182);
    border-radius: 10px; /* 스크롤바의 둥근 정도를 더 부드럽게 */
  }
  ul::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* 스크롤바 배경색을 더 밝게 설정 */
  }
`;

export const ListList = styled.li`
  flex: 0 0 23%;

  &:hover {
    transform: scale(1.25);
    transition: all 0.3s ease-in-out;
  }
  a {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.06);
    color: #757575;

    border-radius: 10px;
    flex-wrap: wrap;
    display: flex;
    background-color: #fafbfb;
    height: 100%;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    gap: 5px;
    padding: 20px;
  }
  h6 {
    font-weight: 500;
  }
  h6 + p {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #50a1ff;
    font-size: 12px;
  }
  h6 + p > code {
    font-size: 12px;
    color: #e83e8c;
    word-wrap: break-word;
  }

  // p:nth-of-type(odd)::after {
  //   content: "|";
  //   margin: 0 10px;
  //   color: #fff;
  // display: inline-block;
  // position: absolute;
  // text-align: right;
  // right: 50%;
  // }
`;

export default {
  ListContainer,
  ListList,
};
