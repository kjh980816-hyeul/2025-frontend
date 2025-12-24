/*
*/

const arr = [3, 88, 76, 9, 34, 65];

// arr 배열에서 짝수만 +2한 새로운 배열을 만들어 주세요.

// const newArr = arr.map(item => {
//   if (item % 2 === 0) {
//     return item +2
//   }
//   return item
// });

const newArr = arr.map(item => item % 2 ? item : item + 2)

console.log(arr);
console.log(newArr);