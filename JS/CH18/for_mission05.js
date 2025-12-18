/* for_misson05.js */

const dan = parseInt(Math.random()*8.0)+2 ; // 2~9 랜덤값
console.log('dan:', dan); //5


for ( let i = 1 ; i<10 ; i++) {
  console.log(dan,"X", i, "=", dan*i);
}

// 5 X 1 = 5
// 5 X 2 = 10
// ...
// 5 X 9 = 45
