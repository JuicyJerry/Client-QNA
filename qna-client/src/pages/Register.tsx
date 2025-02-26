import { useState, useContext } from "react";
import Axios from "axios";
import { QnaDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";
import { RegisterStyle } from "../styles/index.js";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { onRegister } = useContext(QnaDispatchContext)!;
  if (!onRegister)
    throw new Error("[useQnaActions]QnaDispatchContext is not found");
  const navigate = useNavigate();

  const onEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const onNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
    }

    const body = {
      email: email,
      password: password,
      name: name,
    };

    // Axios.post("/api/users/login", body)
    Axios.post("/api/users/register", body)
      // Axios.post("http://localhost:5000/api/users/login", body)
      .then((response) => {
        console.log("[register] response ===> ", response);
        if (response.data.registerSuccess) {
          onRegister({
            isLogin: true,
            message: "회원가입 성공",
          });
          navigate("/");
        } else {
          onRegister({
            isLogin: false,
            message: "회원가입 실패",
          });
          alert("회원가입 실패");
        }
      })
      .catch((err) => {
        console.log("register err ==> ", err);
        onRegister({
          isLogin: false,
          message: "회원가입 에러 발생",
        });
      });
  };

  return (
    <div className="register">
      <RegisterStyle.RegisterContainer>
        <form className="form" onSubmit={onSubmitHandler}>
          <label>Email</label>
          <input type="email" value={email} onChange={onEmailHandler} />
          <label>Name</label>
          <input type="text" value={name} onChange={onNameHandler} />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={onPasswordHandler}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={onConfirmPasswordHandler}
          />
          <button type="submit">Register</button>
        </form>
      </RegisterStyle.RegisterContainer>
    </div>
  );
};

export default Register;
