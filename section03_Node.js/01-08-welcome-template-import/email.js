export function checkValidEmail(email) {
  // 이메일이 정상인지 확인한다. (1-존재하는 이메일인지, 2-이메일 형식인지)
  const isValidEmail = email.includes("@");
  if (!isValidEmail) {
    console.log("이메일 형식이 올바르지 않습니다.");
    return false;
  }
  return true;
}

export function createWelcomeTemplate(name, age, school, createdAt) {
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

export function sendEmail(email, template) {
  console.log(`${email}에 ${template}을 전송합니다.`);
}
