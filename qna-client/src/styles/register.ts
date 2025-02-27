import styled from "@emotion/styled";

export const RegisterContainer = styled.div`
  .register {
    box-sizing: border-box;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #000;
    border-radius: 4px;
    padding: 10px;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: none !important;
  }
`;

export const RegisterForm = styled.div``;

export default {
  RegisterContainer,
  RegisterForm,
};
