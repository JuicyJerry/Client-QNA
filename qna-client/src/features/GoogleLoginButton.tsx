import { useEffect } from "react";

const GoogleLoginButton = () => {
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "YOUR_GOOGLE_CLIENT_ID", // 위에서 발급받은 클라이언트 ID
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("google-button"),
      { theme: "outline", size: "large" } // 버튼 옵션
    );
  }, []);

  const handleCredentialResponse = (response) => {
    // response.credential: JWT 토큰이 들어있음.
    // 백엔드 서버에 토큰 전달하여 검증 및 사용자 정보 획득
    console.log("Encoded JWT ID token: " + response.credential);
  };

  return <div style={{ height: "auto" }} id="google-button"></div>;
};

export default GoogleLoginButton;
