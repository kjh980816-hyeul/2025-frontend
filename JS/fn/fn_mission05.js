/* fn_mission05.js*/

// 함수정의
function printStarLine(num) {
  let k = ''
  for (let a = 0 ; a < num ; a++) {
      k += '*'
  }
  console.log(k);
}



//함수 호출

printStarLine(5);
//*****

printStarLine(3);
// ***


console.log('-------------------------------square')

function printStarSquare(num){
  for(let i = 0 ; i < num ; i++) {  
  printStarLine(num);
  }
}

printStarSquare(5);
//*****
//*****
//*****
//*****
//*****
printStarSquare(3);
// ***
// ***
// ***

console.log('--------------------------triangle');

function printStarTriangle(num) {
  for(let i = 1 ; i <= num; i++)
  printStarLine(i)
}

printStarTriangle(5);
//*
//**
//***
//****
//*****

printStarTriangle(3);
// *
// **
// ***