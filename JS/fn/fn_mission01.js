/* fn_mission01.js */

//함수 정의
function abs(n1) {
  let val = n1;     // 원본을 바꾸면 안됨 할거면 변수 선언해서 변수에다가 넣어야됨
  if (val < 0) {val = val*(-1);}
  console.log(val);
}
// function abs(n1) {
//     console.log(n1 < 0 ? -n1 : n1);
//     console.log(n1 > 0 ? n1 : -n1);
// }



//함수 호출
abs(10); // 콘솔에 10 출력
abs(-20); // 콘솔에 20 출력

