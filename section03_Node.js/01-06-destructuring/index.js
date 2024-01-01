// 구조분해할당 예제
const profile = {
  name: "Alex",
  age: 20,
  school: "korea",
  createdAt: "2021-01-01",
};

// 구조분해할당을 사용하지 않는다면?
// const name = profile.name;
// const age = profile.age;
// const school = profile.school;
// const createdAt = profile.createdAt;

// 구조분해할당을 사용한다면?
const { name, age, school, createdAt } = profile;
console.log(name);
console.log(age);
console.log(school);
console.log(createdAt);

// 구조분해할당을 사용한다면?
function getWelcomeTemplate({ name, age, school, createdAt }) {
  console.log(name);
  console.log(age);
  console.log(school);
  console.log(createdAt);

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
getWelcomeTemplate(profile);
