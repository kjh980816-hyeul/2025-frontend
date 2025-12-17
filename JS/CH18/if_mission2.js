/* if_mission.js


score 값이 98 이상이면 "A+" 출력
score 값이 93~97 이면 "A0" 출력
score 값이 90~92 이면 "A-" 출력

score 값이 88 이상이면 "B+" 출력
score 값이 83~87 이면 "B0" 출력
score 값이 80~82 이면 "B-" 출력

score 값이 78 이상이면 "C+" 출력
score 값이 73~77 이면 "C0" 출력
score 값이 70~72 이면 "C-" 출력

score 값이 68 이상이면 "D+" 출력
score 값이 63~67 이면 "D0" 출력
score 값이 60~62 이면 "D-" 출력

score 값이 60 미만이면 "F" 출력

*/

const score = parseInt(Math.random()*81.0) +20 ;

console.log(score);

if (score >= 90) {
  console.log('A');

  if (score<=92){
    console.log('-');
  }
  else if (score <= 97) {
    console.log('0');
  }
  else {
    console.log('+');
  }
}
else if (score >= 80) {
  console.log('B')

  if (score<=82){
    console.log('-');
  }
  else if (score <=87) {
    console.log('0');
  }
  else {
    console.log('+');
  }
}
else if (score >=70) {
  console.log('C')

  if (score<=72){
    console.log('-');
  }
  else if (score <= 77) {
    console.log('0');
  }
  else {
    console.log('+');
  }
}
else if (score >=60) {
  console.log('D')

  if (score<=62){
    console.log('-');
  }
  else if (score <= 67) {
    console.log('0');
  }
  else {
    console.log('+');
  }
}
else {
  console.log('F');
}