const person = {
  married: true
};

// person이 가리키고 있는 객체의 married 속성이 있는지는 알지만
// 값은 모른다는 전제, 현재 person married 상태를 반대로 만들어 주세요.

person.married = !person.married;


console.log(person);


person['age'] = 30;
const key = 'name';
person[key] = '권수영';
//person1['name] = '권수영; 이렇게 작성한 것과 같다.
console.log(person);

//객체 생성 이후에 속성 추가가 가능하다. (동적 할당)
person.address = '대구';
person['height'] = 174.3;
console.log(person);