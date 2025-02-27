// KakaoLogin.jsx
import React, { useEffect } from "react";
import kakao from "../imgs/kakao_login_medium_narrow.png";

const KakaoLoginButton = () => {
  useEffect(() => {
    // window.Kakao가 존재하는지 확인 후 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("YOUR_JAVASCRIPT_KEY"); // 발급받은 JavaScript 키 입력
      console.log("Kakao 초기화 완료:", window.Kakao.isInitialized());
    }
  }, []);

  const handleKakaoLogin = () => {
    window.Kakao.Auth.login({
      scope: "profile_nickname, account_email", // 필요한 권한 설정
      success: (authObj) => {
        console.log("로그인 성공:", authObj);
        // 로그인 성공 후 사용자 정보 요청
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            console.log("사용자 정보:", res);
            // 사용자 정보를 상태관리하거나 백엔드로 전송하는 등 후속 작업 수행
          },
          fail: (err) => {
            console.error("사용자 정보 요청 실패:", err);
          },
        });
      },
      fail: (err) => {
        console.error("로그인 실패:", err);
      },
    });
  };

  return (
    <button style={{ height: "38.4px" }} onClick={handleKakaoLogin}>
      <img
        style={{ height: "38.4px" }}
        className="kakao"
        src={kakao}
        alt="kakao login logo"
      />
    </button>
  );
};

export default KakaoLoginButton;
