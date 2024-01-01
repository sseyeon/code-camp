## 객체 간단히 표현하기

const profile = {
name: "철수",
age: 12,
school: "다람쥐초등학교"
}

const name = "철수",
const age = 12,
const school = "다람쥐초등학교"

const profile = {
name: name,
age: age,
school: school
}
에서,

const profile = {
name,
age,
school
}

key와 value 가 같다면, 같은 이름(value)은 생략해서 표현할 수 있는게 shorthand property
