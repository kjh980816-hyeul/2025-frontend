/*
math.random() 메소드를 호출하면
0.00000~ 0.99999 사이의 랜덤값을 리턴한다.
*/

let rVal = Math.random();
console.log('rVal', rVal);

// 최소값 ~ 최대값
// 0.00000 ~ 9.999999
let rVal3 = Math.random() * 10;
console.log('rVal3:', rVal3);
console.log('parseInt(rVal3):', parseInt(rVal3));

let rVal4 = parseInt(Math.random() * 10);

