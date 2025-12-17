/*
object.js
자바스크립트에서 객체를 만드는 방법

객체는 (속성), (메소드) 이루어질 수 있다.

key : value(속성값 or 함수)

person1에 저장되는 값은 객체의 주소값 하나!!!

객체의 주소값을 알면 속성값 읽기/쓰기, 메소드 호출할 수 있다.
마법의 키워드: '주소값.'
*/
const person1 = {
  name: "김철수3",
  age: 25,
  married: false,
};

//아파트(person1) 라는 주소값에 101동(name), 102동, 103동 이라는 속성이 있고 101동에 1001호('김철수3')라는 값이 있다.

const person2 = person1; // shallow copy (얕은 복사, 주소값 복사), 동일성
console.log("person1.name:", person1.name);
console.log("person2.name:", person1.name);
person1.name = "홍길동";
person1.age = 30;
console.log("person1.name:", person1.name);
console.log("person2.name:", person1.name);
console.log("person1.age:", person1.age);
console.log("person2.age:", person1.age);

// 객체 자체를 복사하는 것은 deep copy (깊은 복사, 객체 복사)
const person3 = {
  name: "김철수",
  age: 25,
  married: false,
};
// 동등성
