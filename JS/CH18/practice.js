const score = parseInt(Math.random()*81.0) +20 ;

let result = 'F' ;

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

if(result >= 60){
if (result == 100 || result % 10 >= 8) {console.log(result = result + '+')}} ;