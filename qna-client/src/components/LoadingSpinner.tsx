import React from "react";
import styled from "@emotion/styled";
import keyframes from "@emotion/styled";
import logo from "../imgs/logo.svg"; // 로고 경로 맞게 수정!

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8); /* 반투명 배경 */
  z-index: 9999;
`;

const Spinner = styled.img`
  width: 80px;
  height: 80px;
  animation: ${spin} 1.2s linear infinite;
`;

const LoadingSpinner: React.FC = () => {
  return (
    <SpinnerWrapper>
      <Spinner src={logo} alt="Loading..." />
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
