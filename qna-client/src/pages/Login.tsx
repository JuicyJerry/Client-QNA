import React, { useState, useContext, memo } from "react";
import { QnaDispatchContext } from "../_context/index";
import { LoginStyle } from "../styles/index.js";
import { Link, useNavigate } from "react-router-dom";
import GoogleLoginButton from "../features/GoogleLoginButton";
import KakaoLoginButton from "../features/KakaoLoginButton";
import api from "../utils/axios.ts";
import { useLoading } from "../components/LoadingSpinner";

const Login = memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useContext(QnaDispatchContext)!;
  const navigate = useNavigate();
  const { setIsLoading } = useLoading();

  const onErrorMessageHandler = (isActive: boolean) => {
    console.log("[onErrorMessageHandler] Validation Process ===> ", isActive);

    if (isActive) document.querySelector(".err-msg")?.classList.add("active");
    else document.querySelector(".err-msg")?.classList.remove("active");
    setIsLoading(false);
  };

  const onEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onErrorMessageHandler(false);
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onErrorMessageHandler(false);
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("[onSubmitHandler] check ===> ", email);
    console.log("[onSubmitHandler] check ===> ", password);
    setIsLoading(true);
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password || emailRegex.test(email) || password.length < 6) {
      console.log("[Validation Fail] !email ===> ", !email, email);
      console.log("[Validation Fail] !password ===> ", !password, password);
      console.log(
        "[Validation Fail] !emailRegex.test(email) ===> ",
        !emailRegex.test(email)
      );
      console.log(
        "[Validation Fail] password.length < 6) ===> ",
        password.length < 6
      );
      return onErrorMessageHandler(true);
    } else {
      console.log("Validation Success");
      const body = {
        email: email,
        password: password,
      };

      // api.post("/api/users/login", body)
      api
        .post("/api/users/login", body, { withCredentials: true })
        // api.post("http://localhost:5000/api/users/login", body)
        .then((response) => {
          console.log(
            "[Login] response.data.loginSuccess ===> ",
            response.data.loginSuccess
          );

          if (response.data.loginSuccess) {
            setIsLoading(false);
            onLogin({
              isLogin: true,
              message: "로그인 성공",
            });
            navigate("/", { replace: true });
          } else {
            console.log("Validation Fail");

            setIsLoading(false);
            alert("Error");
            onLogin({
              isLogin: false,
              message: "로그인 실패",
            });

            return onErrorMessageHandler(true);
          }
        })
        .catch((err) => {
          console.log("login err ==> ", err);
          onLogin({
            isLogin: false,
            message: "로그인 에러 발생",
          });
          setIsLoading(false);

          return onErrorMessageHandler(true);
        });
    }
  };

  const link = { path: "/find", label: "비밀번호 찾기" };

  return (
    <div>
      <LoginStyle.LoginForm className="login">
        <h3>로그인</h3>
        <form onSubmit={onSubmitHandler}>
          <label className="sr-only">Email</label>
          <input
            type="email"
            value={email}
            onChange={onEmailHandler}
            placeholder="Email"
          />
          <label className="sr-only">Password</label>
          <input
            type="password"
            value={password}
            onChange={onPasswordHandler}
            placeholder="Password"
          />
          <div className="user-support">
            <p className="err-msg">이메일 또는 비밀번호를 확인해주세요.</p>
            <Link
              key={link.path}
              to={link.path}
              className={
                location.pathname === link.path ? "find-pw active" : "find-pw "
              }
            >
              {link.label}
            </Link>
          </div>
          <button className="btn-outline-success btn-round" type="submit">
            Login
          </button>

          <div className="login-divider"></div>

          <div className="social-login">
            {/* 구글 */}
            <GoogleLoginButton />
            {/* 카카오 */}
            <KakaoLoginButton />
          </div>
        </form>
      </LoginStyle.LoginForm>
    </div>
  );
});

export default Login;
