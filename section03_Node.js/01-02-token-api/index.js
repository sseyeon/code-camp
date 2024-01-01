function createTokenOfPhone(phone) {
  // 1. 휴대폰 번호의 자릿수가 11자리가 아니면 에러를 발생시킨다.
  if (phone.length !== 11) {
    console.log("휴대폰 번호의 자릿수가 11자리가 아닙니다.");
    // throw new Error("휴대폰 번호의 자릿수가 11자리가 아닙니다.");
    return;
  }
  // 2. 핸드폰 토큰 6자리를 생성한다.
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");

  // 3. 핸드폰번호에 토큰을 전송한다.
  console.log(`${phone}에 ${token}을 전송합니다.`);
}
createTokenOfPhone("01012345678");
