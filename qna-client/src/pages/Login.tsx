import React, { useState, useContext } from "react";
import Axios from "axios";
import { QnaDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";
import { LoginStyle } from "../styles/index.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useContext(QnaDispatchContext)!;
  const navigate = useNavigate();

  const onEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("check");
    event.preventDefault();
    console.log(email);
    console.log(password);

    const body = {
      email: email,
      password: password,
    };

    // Axios.post("/api/users/login", body)
    Axios.post("/api/users/login", body)
      // Axios.post("http://localhost:5000/api/users/login", body)
      .then((response) => {
        if (response.data.loginSuccess) {
          onLogin({
            isLogin: true,
            message: "로그인 성공",
          });
          navigate("/");
        } else {
          onLogin({
            isLogin: false,
            message: "로그인 실패",
          });
          alert("Error");
        }
      })
      .catch((err) => {
        console.log("login err ==> ", err);
        onLogin({
          isLogin: false,
          message: "로그인 에러 발생",
        });
      });
  };

  return (
    <div className="login">
      <LoginStyle.LoginForm>
        <form onSubmit={onSubmitHandler}>
          <label>Email</label>
          <input type="email" value={email} onChange={onEmailHandler} />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={onPasswordHandler}
          />
          <button type="submit">Login</button>
        </form>
      </LoginStyle.LoginForm>
    </div>
  );
};

export default Login;
