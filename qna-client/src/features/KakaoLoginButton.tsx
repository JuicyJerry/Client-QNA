// KakaoLogin.jsx
import React, { useEffect, useContext } from "react";
import kakao from "../assets/imgs/kakao_login_medium_narrow.png";
import { useNavigate } from "react-router-dom";
import { QnaDispatchContext } from "../_context/QnaDispatchProvider.tsx";
import { ENV } from "../config/env.ts";
import styled from "@emotion/styled";
import api from "../utils/axios.ts";

const StyledKakaoButton = styled.button`
  width: 100%;
  height: 100%;
`;
const StyledKakaoButtonImg = styled.img`
  width: 100%;
  height: 100%;
`;

const KakaoLoginButton = () => {
  const navigate = useNavigate();
  const { onLogin } = useContext(QnaDispatchContext)!;

  useEffect(() => {
    // console.log("[KakaoLoginButton]VITE_KAKAO_JS_KEY ===> ", ENV.KAKAO_JS_KEY);
    // console.log("[KakaoLoginButton]window.Kakao ===> ", window.Kakao);
    // console.log(
    //   "[KakaoLoginButton]window.Kakao.isInitialized() ===> ",
    //   window.Kakao.isInitialized()
    // );
    // // window.Kakao가 존재하는지 확인 후 초기화
    // if (window.Kakao && !window.Kakao.isInitialized()) {
    //   window.Kakao.init(ENV.KAKAO_JS_KEY); // 발급받은 JavaScript 키 입력
    //   console.log("Kakao 초기화 완료:", window.Kakao.isInitialized());
    // }
  }, []);

  const handleKakaoLogin = () => {
    // window.Kakao가 존재하는지 확인 후 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(ENV.KAKAO_JS_KEY); // 발급받은 JavaScript 키 입력
      console.log("Kakao 초기화 완료:", window.Kakao.isInitialized());
    }

    window.Kakao.Auth.login({
      scope: "profile_nickname, account_email", // 필요한 권한 설정
      success: (authObj) => {
        console.log("로그인 성공:", authObj);
        // 로그인 성공 후 사용자 정보 요청
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: async (response) => {
            console.log("사용자 정보:", response);
            const res = await api.post(
              "http://localhost:5000/api/users/kakao-login",
              {
                token: authObj,
              }
            );
            localStorage.setItem("user", authObj);
            console.log("[handleKakaoLogin]User Info: 2", res.data.user);
            // localStorage.setItem("user", JSON.stringify(res.data.user));
            onLogin({
              isLogin: true,
              message: "로그인 성공",
            });
            navigate("/", { state: { userInfo: res } });
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
    <StyledKakaoButton onClick={handleKakaoLogin}>
      <StyledKakaoButtonImg
        className="kakao"
        src={kakao}
        alt="kakao login logo"
      />
    </StyledKakaoButton>
  );
};

export default KakaoLoginButton;
