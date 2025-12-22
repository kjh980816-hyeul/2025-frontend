/* fn_mission02.js 

abs를 리턴함수로 만들고
콘솔에는 "절대값: 리턴한 값" 추력해 주세요.
*/

function abs(num) {
  let val = num;
  if (val < 0) {
    val = -val
  }
  return val; // 이 4줄을 return num < 0 ? -num:num; 으로 바꾸는게 더 깔끔
}
const random = parseInt(Math.random()*10)-5;
const returnabs = abs(random);

console.log("절댓값: ", returnabs);