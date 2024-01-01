function checkValidEmail(email) {
  // 이메일이 정상인지 확인한다. (1-존재하는 이메일인지, 2-이메일 형식인지)
  const isValidEmail = email.includes("@");
  if (!isValidEmail) {
    console.log("이메일 형식이 올바르지 않습니다.");
    return false;
  }
  return true;
}

function createWelcomeTemplate(name, age, school, createdAt) {
  const mytemplate = `
        <html>
            <head>
                <title>Welcome</title>
            </head>
            <body>
                <h1>${name}님 가입을 환영합니다!</h1>
                <hr />
                <p>이름: ${name}</p>
                <p>나이: ${age}</p>
                <p>학교: ${school}</p>
                <p>가입일: ${createdAt}</p>
            </body>
        </html>    
        `;
  return mytemplate;
}

function sendEmail(email, template) {
  console.log(`${email}에 ${template}을 전송합니다.`);
}

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
