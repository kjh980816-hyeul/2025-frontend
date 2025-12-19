/* for_array_mission02.js
반복문을 사용 하여 배열에 들어있는 모든값을 더하여 더한값을 출력해 주세요.

*/
let sum = 0
const arr = [3, 8, 11, 86, 43, 22, 27];
for(let i = 0 ; i < arr.length ; i++) {
  sum += arr[i]
  
}

console.log(sum)