import { useState, useContext, useEffect } from "react";
import Axios from "axios";
import { QnaDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";
import { RegisterStyle } from "../styles/index.js";
import check from "../imgs/check.svg";
import cancel from "../imgs/cancel.svg";
import confirm from "../imgs/confirm.svg";
import PhoneEmailButton from "../components/PhoneEmailButton";

const Register = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [pwCondition1, setPwCondition1] = useState("basic");
  const [pwCondition2, setPwCondition2] = useState("basic");
  const [pwCondition3, setPwCondition3] = useState("basic");

  // 비밀번호 조건 검사 함수
  useEffect(() => {
    console.log("password ===> ", password);

    if (password.length === 0) {
      setPwCondition1("basic");
      setPwCondition2("basic");
      setPwCondition3("basic");
      return;
    }

    // 조건 1: 영문/숫자/특수문자 중 2가지 이상 포함
    const condition1 =
      (/[a-zA-Z]/.test(password) && /[0-9]/.test(password)) ||
      (/[a-zA-Z]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) ||
      (/[0-9]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password));
    setPwCondition1(condition1 ? "success" : "cancel");

    // 조건 2: 8자 이상 32자 이하 입력 (공백 제외)
    const condition2 =
      password.length >= 8 && password.length <= 32 && !/\s/.test(password);
    setPwCondition2(condition2 ? "success" : "cancel");

    // 조건 3: 연속 3자 이상 동일한 문자/숫자 제외
    const condition3 = !/(.)\1\1/.test(password);
    setPwCondition3(condition3 ? "success" : "cancel");
  }, [password]);

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
  const onNicknameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const handleVerification = (verifiedPhone: string) => {
    setPhoneNumber(verifiedPhone);
    setIsVerified(true);
  };
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isVerified) {
      return alert("전화번호 인증을 완료해주세요.");
    }

    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
    }

    const body = {
      email: email,
      password: password,
      nickname: nickname,
      phoneNumber,
      authentication: isVerified,
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
    <div>
      <RegisterStyle.RegisterForm className="register">
        <h3>회원가입</h3>
        <form className="form" onSubmit={onSubmitHandler}>
          <label className="sr-only">Email</label>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={onEmailHandler}
          />
          <label className="sr-only">Nickname</label>
          <input
            placeholder="Nickname"
            type="text"
            value={nickname}
            onChange={onNicknameHandler}
          />
          <label className="sr-only">Password</label>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={onPasswordHandler}
          />

          <div>
            <div className={`pw-condition ${pwCondition1}`}>
              <img
                className="pw-status"
                src={
                  pwCondition1 === "success"
                    ? confirm
                    : pwCondition1 === "cancel"
                    ? cancel
                    : check
                }
                alt="check"
              />
              <p className="pw-text">영문/숫자/특수문자 중, 2가지 이상 포함</p>
            </div>
            <div className={`pw-condition ${pwCondition2}`}>
              <img
                className="pw-status"
                src={
                  pwCondition2 === "success"
                    ? confirm
                    : pwCondition2 === "cancel"
                    ? cancel
                    : check
                }
                alt="check"
              />
              <p className="pw-text">8자 이상 32자 이하 입력 (공백 제외)</p>
            </div>
            <div className={`pw-condition ${pwCondition3}`}>
              <img
                className="pw-status"
                src={
                  pwCondition3 === "success"
                    ? confirm
                    : pwCondition3 === "cancel"
                    ? cancel
                    : check
                }
                alt="check"
              />
              <p className="pw-text">연속 3자 이상 동일한 문자/숫자 제외</p>
            </div>
          </div>

          <label className="sr-only">Confirm Password</label>
          <input
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={onConfirmPasswordHandler}
          />

          <PhoneEmailButton onVerify={handleVerification} />
          {isVerified && (
            <p style={{ color: "green" }}>전화번호가 인증되었습니다.</p>
          )}

          <button className="btn-outline-success btn-round" type="submit">
            Register
          </button>
        </form>
      </RegisterStyle.RegisterForm>
    </div>
  );
};

export default Register;
