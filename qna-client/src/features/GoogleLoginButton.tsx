import { useEffect, useContext } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { QnaUserInfoDispatchContext } from "../App";

const GoogleLoginButton = () => {
  console.log("Google Client ID:", import.meta.env.VITE_GOOGLE_CLIENT_ID);
  console.log("Google Redirect URI:", import.meta.env.VITE_GOOGLE_REDIRECT_URI);
  const navigate = useNavigate();
  const { onLogin } = useContext(QnaUserInfoDispatchContext)!;

  const googleLoginClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    console.log("Google Client ID 2:", import.meta.env.VITE_GOOGLE_CLIENT_ID);
    console.log(
      "Google Redirect URI 2:",
      import.meta.env.VITE_GOOGLE_REDIRECT_URI
    );

    const googleAuthUrl = new URL(
      "https://accounts.google.com/o/oauth2/v2/auth"
    );
    const params = {
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
      response_type: "code",
      scope: "email profile",
      access_type: "offline",
      prompt: "consent",
    };

    Object.keys(params).forEach((key) =>
      googleAuthUrl.searchParams.append(key, params[key])
    );

    // window.location.href = googleAuthUrl.toString();
    // window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
    // client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}
    // &redirect_uri=${import.meta.env.VITE_GOOGLE_REDIRECT_URI}
    // &response_type=code
    // &scope=email profile`
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID, // 위에서 발급받은 클라이언트 ID
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("google-button"),
      { theme: "outline", size: "large" } // 버튼 옵션
    );
  }, []);

  const handleCredentialResponse = async (response) => {
    // response.credential: JWT 토큰이 들어있음.
    console.log("Encoded JWT ID token: " + response.credential);
    // 백엔드 서버에 토큰 전달하여 검증 및 사용자 정보 획득

    try {
      console.log("User Info: 1");
      // Axios.post("http://localhost:5000/api/users/login", body)
      // const res = await Axios.post("/api/users/google-login", {
      const res = await Axios.post(
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

  return (
    <div
      style={{ height: "auto" }}
      onClick={googleLoginClick}
      id="google-button"
    ></div>
  );
};

export default GoogleLoginButton;
