import styled from "@emotion/styled";

export const RegisterContainer = styled.div`
  width: 400px;
  padding: 2rem;
  border-radius: 2rem;
  min-height: 400px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  .register {
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
`;

export const RegisterForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  form.tel {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  form.tel + input[type="number"] {
    flex-wrap: wrap;
  }
  form.tel button {
    background-color: #0051ff;
    color: #fff;
    height: 40px;
    border-radius: 5px;
    width: 84px;
    font-size: 0.875rem;
    height: 40px;
    white-space: nowrap;
    padding: 5px;
  }
  form.tel input[type="tel"] {
    width: 100%;
  }
  form.tel input[type="tel"] + input[type="number"] {
    width: 70%;
  }

  form input[type="email"],
  form input[type="number"],
  form input[type="tel"],
  form input[type="text"],
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

  .pw-condition {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .pw-status {
    display: flex;
    align-items: center;
    font-size: 16px;
    width: 14px;
    height: 23px;
  }

  // .pw-condition.basic img {
  //   display: block;
  // }
  // .pw-condition.success img {
  //   display: block;
  // }
  // .pw-condition.cancel img {
  //   display: block;
  // }
`;

export default {
  RegisterContainer,
  RegisterForm,
};
