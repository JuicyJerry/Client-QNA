/**
 * 단문 문자(SMS) 발송 예제
 * 발신번호, 수신번호에 반드시 -, * 등 특수문자를 제거하여 기입하시기 바랍니다. 예) 01012345678
 */
const coolsms = require("coolsms-node-sdk").default;
const messageService = new coolsms(
  "PROCESS.ENV.VITE_COOLSMS_API_KEY",
  "PROCESS.ENV.VITE_COOLSMS_API_SECRET"
);

// 단일 발송 예제
messageService
  .sendOne({
    to: "수신번호",
    from: "계정에서 등록한 발신번호 입력",
    text: "한글 45자, 영자 90자 이하 입력되면 자동으로 SMS타입의 메시지가 발송됩니다.",
  })
  .then((res) => console.log(res));
