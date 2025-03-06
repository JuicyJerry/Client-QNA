import styled from "@emotion/styled";

export const ControllerContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  h3 {
    font-size: 28px;
  }
  h3 + .controller-bd {
    display: flex;
    // flex-direction: column;
    gap: 20px;
  }
`;

export const ControllerContents = styled.div`
  // width: 400px;
  width: fit-content;
  padding: 2rem;
  border-radius: 2rem;
  border: 1px solid rgba(0; 0, 0, 0.1);
  // min-height: 400px;

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
    // height: 100px;
  }

  .question input[type="text"] {
    display: flex;
    flex-direction: column;
  }
  .question input[type="text"] {
    min-height: 80px;
    border-radius: 5px;
    height: auto;
    height: 50px;
    min-height: 50px;
    padding: 5px;
  }
`;

export const ControllerAnswer = styled.div`
  .answer {
    display: flex;
    flex-direction: column;
    // height: 100px;
  }
  .answer {
    min-height: 80px;
    border-radius: 5px;
  }
  .answer textarea {
    resize: none;
    border-radius: 5px;
    height: 50px;
    min-height: 50px;
    padding: 5px;
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
    height: 50px;
    background-color: #0051ff;
    color: #fff;
  }
`;

export default {
  ControllerContainer,
  ControllerContents,
  ControllerQuestion,
  ControllerAnswer,
  ControllerSaveButton,
};
