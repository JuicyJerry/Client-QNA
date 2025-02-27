import styled from "@emotion/styled";

export const ControllerContainer = styled.div`
  box-sizing: border-box;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  // border: 1px solid #000;
  padding: 10px;
  border-radius: 5px;

  .warning {
    padding-top: 4px;
    color: #482c2c;
    font-size: 10px;
  }
`;

export const ControllerQuestion = styled.div`
  .question {
    display: flex;
    flex-direction: column;
  }

  .question input[type="text"] {
    display: flex;
    flex-direction: column;
  }
  .question input[type="text"] {
    min-height: 80px;
    border-radius: 5px;
    height: auto;
  }
`;

export const ControllerAnswer = styled.div`
  .answer {
    display: flex;
    flex-direction: column;
  }
  .answer {
    min-height: 80px;
    border-radius: 5px;
  }
  .answer textarea {
    resize: none;
    border-radius: 5px;
  }
`;

export const ControllerSaveButton = styled.div`
  .save {
    display: flex;
    justify-content: flex-end;
  }
  .save button[type="button"] {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 5px;
    font-weight: 500;
  }
`;

export default {
  ControllerContainer,
  ControllerQuestion,
  ControllerAnswer,
  ControllerSaveButton,
};
