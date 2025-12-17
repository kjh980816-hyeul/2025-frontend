/* if_mission.js

score 값이 90 이상이면 "A" 출력
score 값이 80 이상이면 "B" 출력
score 값이 70 이상이면 "C" 출력
score 값이 60 이상이면 "D" 출력
score 값이 60 미만이면 "F" 출력

*/

const score = parseInt(Math.random()*81.0) +20 ;

if (score >= 90) {
  console.log('A');
}
else if (score >= 80) {
  console.log('B')
}
else if (score >=70) {
  console.log('C')
}
else if (score >=60) {
  console.log('D')
}
else {
  console.log('F');
}