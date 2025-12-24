/* cb02.js 배열의 forEach */

const arr = [ 3, 88, 76, 9, 34, 65 ];

function proc(item) {
  console.log(item);
}

arr.forEach(proc);
// for (let i = 0; i < arr.length ; i++) {
//   proc(arr[i]);
// }

arr.forEach((item,idx) => {
  console.log(`arr[${idx}]: ${item}`);
});