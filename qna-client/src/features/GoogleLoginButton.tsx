import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QnaDispatchContext } from "../_context/index";
import { ENV } from "../config/env.ts";
import { GoogleCredentialResponse } from "../types/types.ts";
import api from "../utils/axios.ts";

const GoogleLoginButton = () => {
  // console.log("Google Client ID:", ENV.GOOGLE_CLIENT_ID);
  // console.log("Google Redirect URI:", ENV.GOOGLE_CLIENT_REDIRECT);
  const navigate = useNavigate();
  const { onLogin } = useContext(QnaDispatchContext)!;

  const googleLoginClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log("[googleLoginClick] googleLoginClick 1 ---> ");
    e.preventDefault();

    const googleAuthUrl = new URL(
      "https://accounts.google.com/o/oauth2/v2/auth"
    );
    const params: { [key: string]: string } = {
      client_id: ENV.GOOGLE_CLIENT_ID,
      redirect_uri: ENV.GOOGLE_CLIENT_REDIRECT,
      response_type: "code",
      scope: "email profile",
      access_type: "offline",
      prompt: "consent",
    };

    Object.keys(params).forEach((key) =>
      googleAuthUrl.searchParams.append(key, params[key] as string)
    );

    console.log("[googleLoginClick] googleLoginClick 2 ---> ");

    // window.location.href = googleAuthUrl.toString();
    // window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
    // client_id=${ENV.GOOGLE_CLIENT_ID}
    // &redirect_uri=${ENV.GOOGLE_CLIENT_REDIRECT}
    // &response_type=code
    // &scope=email profile`
  };

  useEffect(() => {
    // /* global google */
    window.google.accounts.id.initialize({
      client_id: ENV.GOOGLE_CLIENT_ID, // 위에서 발급받은 클라이언트 ID
      callback: handleCredentialResponse,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("google-button"),
      { theme: "outline", size: "large" } // 버튼 옵션
    );
  }, []);

  const handleCredentialResponse = async (
    response: GoogleCredentialResponse
  ) => {
    // response.credential: JWT 토큰이 들어있음.
    console.log("Encoded JWT ID token: " + response.credential);
    // 백엔드 서버에 토큰 전달하여 검증 및 사용자 정보 획득

    try {
      // console.log("User Info: 1");
      // api.post("http://localhost:5000/api/users/login", body)
      // const res = await api.post("/api/users/google-login", {
      const res = await api.post(
        "http://localhost:5000/api/users/google-login",
        {
          token: response.credential,
        }
      );
      console.log("User Info: 2", res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      onLogin({
        isLogin: true,
        message: "로그인 성공",
      });
      alert("google login 완료되었습니다.(localstorage 확인 가능)");
      navigate("/");
    } catch (err) {
      console.log("Error while verifying token: ", err);
    }
  };

  return <div onClick={googleLoginClick} id="google-button"></div>;
};

export default GoogleLoginButton;
