/* for_array_mission03.js
배열에 있는 값들을 홀수는 홀수대로 짝수는 짝수대로 모두 더하여 출력해주시오.
*/


const arr = [ 3, 8, 11, 86, 43, 22, 27];
let sum = 0;
let sum2 = 0;
for(let i = 0 ; i < arr.length ; i++) {
  if (arr[i] % 2 === 0) {
      sum += arr[i]
  } else {
    sum2 += arr[i]
  }
}

console.log(`짝수 : ${sum} \n홀수 : ${sum2}`);