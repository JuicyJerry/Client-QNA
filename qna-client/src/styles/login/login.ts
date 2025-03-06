import styled from "@emotion/styled";

export const LoginContainer = styled.div`
  width: 400px;
  padding: 2rem;
  border-radius: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  min-height: 400px;

  .login {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & h3 {
    font-size: 28px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .user-support {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
  .user-support .err-msg {
    color: #fa5253;
    visibility: hidden;
  }
  .user-support .err-msg.active {
    color: #fa5253;
    visibility: visible;
    font-weight: 800;
    font-size: 12px;
  }
  .user-support .find-pw {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .login-divider {
    display: inline-block;
    height: 1px;
    width: 100%;
    margin: 10px auto;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.25);
  }

  .social-login {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    height: 40px;
  }
`;

export const LoginForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  form input[type="email"],
  form input[type="password"] {
    height: 40px;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 10rem;
  }
  form button[type="submit"] {
    height: 40px;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 10rem;
  }
`;

export default {
  LoginContainer,
  LoginForm,
};
