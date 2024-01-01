// 1. 휴대폰 번호의 자릿수가 11자리가 아니면 에러를 발생시킨다.
function checkLengthOfPhone(phone) {
  if (phone.length !== 11) {
    console.log("휴대폰 번호의 자릿수가 11자리가 아닙니다.");
    return false;
  }
  return true;
}

// 2. 핸드폰 토큰 6자리를 생성한다.
function createToken() {
  return String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
}

// 3. 핸드폰번호에 토큰을 전송한다.
function sendToken(phone, token) {
  console.log(`${phone}에 ${token}을 전송합니다.`);
}

function createTokenOfPhone(phone) {
  const isPhoneLengthValid = checkLengthOfPhone(phone);
  if (!isPhoneLengthValid) return;

  const token = createToken();
  sendToken(phone, token);
}

createTokenOfPhone("01012345678");
