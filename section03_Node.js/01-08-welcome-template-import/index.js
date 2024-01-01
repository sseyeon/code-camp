import { checkValidEmail, createWelcomeTemplate, sendEmail } from "./email.js";

function createUser(user) {
  // 1. 이메일이 정상인지 확인한다. (1-존재하는 이메일인지, 2-이메일 형식인지)
  const isValidEmail = checkValidEmail(user.email);

  if (!isValidEmail) return;

  // 2. 가입 환영 템플릿을 만든다.
  const welcomeTemplate = createWelcomeTemplate(
    user.name,
    user.age,
    user.school,
    user.createdAt
  );
  // 3. 이메일에 가입 환영 템플릿을 전송한다.
  sendEmail(user.email, welcomeTemplate);
}

const user = {
  email: "seyeon9809@naver.com",
  password: "",
  name: "정세연",
  age: "27",
  school: "부경대학교",
  createdAt: "2021-01-01",
};
createUser(user);
