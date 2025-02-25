import styled from "@emotion/styled";

export const ListContainer = styled.div`
  box-sizing: border-box;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 10px;
  position: relative;
  width: 100%;
  height: 100%;

  .total {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const ListList = styled.div`
  ul {
    margin-top: 50px;
    max-height: 280px;
    padding: 10px;
    overflow-y: scroll;
  }
  ul::-webkit-scrollbar {
    width: 10px;
    height: 20px;
    margin-left: 5px;
  }
  ul::-webkit-scrollbar-thumb {
    background: rgb(144, 182, 21);
    border-radius: 12px 12px 12px 12px;
  }

  ul li {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 20px;
    position: relative;
  }
  ul li p:nth-of-type(odd)::after {
    content: "|";
    margin: 0 10px;
    color: #fff;
    // display: inline-block;
    // position: absolute;
    // text-align: right;
    // right: 50%;
  }
`;

export default {
  ListContainer,
  ListList,
};
