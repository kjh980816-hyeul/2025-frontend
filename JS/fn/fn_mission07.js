/* fn_mission07.js */
// 함수 정의
function sumArr(arr) {
  let sum = 0;
  for ( let i = 0 ; i < arr.length ; i++) {
    sum += arr[i]
  }
  return sum
}


const arr = [10, 8, 4, 88, 65, 3, 99];
const sum = sumArr(arr);

console.log(sum);