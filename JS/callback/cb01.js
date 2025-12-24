/* cb01.js 
함수 주소값을 알면(저장되어 있다면) 함수 호출할 수 있다.

A 함수한테 B함수 주소값을 보내면 A 함수가 B 함수를
호출할 수 있는 상태

함수형 프로그래밍!
*/

// sum 변수에 함수의 주소값이 저장
function sum(n1, n2) {return n1 + n2;}
function multiply(n1, n2) {return n1 * n2;}

function calc(fn, n1, n2) {
  return fn(n1,n2);
}

const result = calc(multiply, 50, 20);
console.log('result:', result);