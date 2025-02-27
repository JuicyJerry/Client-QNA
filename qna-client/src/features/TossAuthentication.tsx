import React, { useState } from "react";
import Axios from "axios";
import styled from "@emotion/styled";

const TossAuthButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #0064ff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const TossAuthentication = () => {
  const [loading, setLoading] = useState(false);

  const handleTossAuth = async () => {
    setLoading(true);

    try {
      const response = await Axios.post("/api/auth/toss-request");
      const { authUrl } = response.data;

      if (authUrl) {
        window.location.href = authUrl; // 토스 인증 페이지로 이동
      }
    } catch (error) {
      console.error("토스 인증 요청 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* <h3>토스 본인 인증</h3> */}
      <TossAuthButton onClick={handleTossAuth} disabled={loading}>
        {loading ? "인증 요청 중..." : "토스로 본인 인증하기"}
      </TossAuthButton>
    </div>
  );
};

export default TossAuthentication;
