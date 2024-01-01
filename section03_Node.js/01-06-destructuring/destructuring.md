## destructuring 구조분해할당(=비구조화할당)

const profile = {
name: "철수",
age: 12,
school: "다람쥐초등학교"
}

const name = profile.name
const age = profile.age
const school = profile.school

- 구조분해할당
  const { name, age, school } = profile

---

const classmates = ["철수", "영희", "훈이"]
const child1 = classmates[0]
const child2 = classmates[1]
const child3 = classmates[2]

- 구조분해할당
  const [child1, child2, child3] = classmates

### (주의) 객체 {} 는 순서는 중요하지 않음, 이름(Key)이 중요

### (주의) 베열 [] 은 순서가 중요함

### 결론

함수(변수1, 변수2, ... 변수20) 이면 변수를 하나라도 빠뜨리면 문제가 생김
함수(객체)이면,(=구조분해할당을 사용하면) 이름만 같다면 문제가 생기지 않음 (문제 최소화)
