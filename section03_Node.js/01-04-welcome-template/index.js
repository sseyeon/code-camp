function getWelcomeTemplate({ name, age, school, createdAt }) {
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
  console.log(mytemplate);
}
const name = "세연";
const age = 27;
const school = "korea";
const createdAt = "2021-01-01";
getWelcomeTemplate({ name, age, school, createdAt });
