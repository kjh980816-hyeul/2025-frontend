/* assign_operator.js
대입 연산자 '='
*/
// n1 = 변수 / 10 = 리터널
let n1 = 10;
n1 = n1 + 5;
// 1) n1 = 10 + 5;
// 2) n1 = 15;
console.log('n1:', n1);

/*
변수에 들어있는 값이 변경이 되려면 = (대입연산자)
를 이용하여 변경해야 합니다. 유일하게 대입연산자 없이
숫자 변수의 값을 변경할 수 있는 연산자 증가 연산자(++), 감소 연산자(--) 
*/
let n3 = 50;
n3++; //증가 연산자 - 쓰기 작업만 할때는 앞에 있거나 뒤에 있거나 상관 없음
++n3; //증가 연산자
console.log('n3:', n3);

--n3; //감소 연산자
n3--; //감소 연산자
n3--; //감소 연산자
console.log('n3:', n3);

let n4 = 10;
let result4 = n4++; // 읽기랑 쓰기 작업이 진행되는데 읽기를 먼저 하고 쓰기

let n5 = 10;
let result5 = ++n5; // 쓰기 먼저 하고 읽기

console.log('result4:', result4);
console.log('result5:', result5);
console.log('n4:', n4);
console.log('n5:', n5);

console.log('-------------------------------');
let n6 = 10;
n6++; // 쓰기
console.log('n6:', n6); // 읽기

let n7 = 10;
console.log('n7++:', n7++); //10
console.log('n7:', n7); // 11

let n8 = 10;
console.log('++n8:', ++n8);
console.log('n8:', n8);