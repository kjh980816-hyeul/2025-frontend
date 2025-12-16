/*
자료형(데이터 유형)
-boolean 참(true), 거짓(false)
*/

let bool1=true;
let bool2=false;

console.log('bool1', bool1);
console.log('bool2', bool2);

console.log('typeof bool1:', typeof(bool1));
console.log('typeof bool1:', typeof bool1);

/*
 불린 타입은 비교 연산자의 결과로 많이 사용이 된다.
*/
let n1 = 10, n2 = 20;
bool1 = n1 > n2;
console.log('bool1:', bool1);
console.log('n > 10:', n1 > 10);
console.log('n >= 10:', n1 >= 10);
console.log('-------------------');
console.log('n2 < 20:', n2 < 20);
console.log('n2 <= 20:', n2 <= 20);
console.log('-------------------');
console.log('n1 == n2:', n1 == n2);
console.log('n1 != n2:', n1 != n2); // n1과 n2가 다르면 true, 같으면 false
console.log('------------------- 논리연산자 ! (Not)');
console.log('!(n1 == n2):', !(n1 == n2));
console.log('!(n1 != n2):', !(n1 != n2));

console.log('------------------- 논리연산자 && (And) ');
console.log('true && true: ', true && true);
console.log('true && true && false: ', true && true && false); // 단 하나라도 false가 있다면 값은 false

console.log('------------------- 논리연산자 || (OR) ');
console.log('false || false: ', false || false); // 단 하나라도 true가 있다면 값은 true
