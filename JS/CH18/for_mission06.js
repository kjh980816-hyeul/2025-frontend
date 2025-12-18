/*for_mission06.js 
구구단 2단~9단까지 출력해 주시오.

*/

for(let dan = 2 ; dan<= 9 ; dan++) {
  if(dan > 2 ) {console.log("---------------");};
  for(let i = 1; i<=9; i++) {
    console.log(`${dan} X ${i} = ${dan*i}`);
  } 
  
}