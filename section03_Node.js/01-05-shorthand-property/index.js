const name = "Alex";
const age = 20;
const school = "korea";
const createdAt = "2021-01-01";

// const profile = {
//   name: name,
//   age: age,
//   school: school,
//   createdAt: createdAt,
// };

// Shorthand property
// key와 value의 이름이 동일하다면, 아래와 같이 축약해서 사용할 수 있다.
const profile = {
  name,
  age,
  school,
  createdAt,
};
function getWelcomeTemplate({ name, age, school, createdAt }) {
  console.log(profile);

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

getWelcomeTemplate({ name, age, school, createdAt });
