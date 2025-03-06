import React, { useState, memo } from "react";
import { RegisterStyle } from "../styles";
import api from "../utils/axios";

const PhoneEmailButton: React.FC<{ onVerify: (phone: string) => void }> = memo(
  ({ onVerify }) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [sentCode, setSentCode] = useState("");
    const [isCodeSent, setIsCodeSent] = useState(false);

    // 인증번호 발송
    const handleSendCode = async (e) => {
      e.preventDefault();
      console.log("[handleSendCode]phoneNumber ---> ", phoneNumber);

      try {
        const response = await api.post(
          "http://localhost:5000/send-verification",
          {
            phoneNumber,
          }
        );
        console.log("[handleSendCode]response ---> ", response);
        console.log("[handleSendCode]code ---> ", response.data);
        console.log(
          "[handleSendCode]verificationCode ---> ",
          response.data.verificationCode
        );

        //   if (response.data.success) {
        if (response.data.verificationCode) {
          setSentCode(response.data.verificationCode); // 서버에서 생성된 코드 저장
          setIsCodeSent(true);
          alert("인증번호가 발송되었습니다.");
        }
      } catch (error) {
        console.error("인증번호 발송 실패:", error);
        alert("인증번호 발송에 실패했습니다.");
      }
    };

    // 인증번호 확인
    const handleVerifyCode = () => {
      if (verificationCode === sentCode) {
        onVerify(phoneNumber);
        alert("전화번호 인증이 완료되었습니다.");
        setIsCodeSent(false);
        setVerificationCode("");
      } else {
        alert("인증번호가 일치하지 않습니다.");
      }
    };

    return (
      <div>
        <RegisterStyle.RegisterForm>
          <form className="tel">
            <label className="sr-only">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="휴대폰 번호 '-' 제외하고 입력"
              disabled={isCodeSent}
            />
            {!isCodeSent ? (
              <button onClick={handleSendCode}>인증번호</button>
            ) : (
              <>
                <input
                  type="number"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="인증번호 입력"
                />
                <button onClick={handleVerifyCode}>인증 확인</button>
              </>
            )}
          </form>
        </RegisterStyle.RegisterForm>
      </div>
    );
  }
);

export default PhoneEmailButton;
