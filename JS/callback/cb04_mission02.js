/* cb04_mission02.js 
arr에서 짝수만 골라 내고 나누기 2한 배열을 만들어 주세요.
*/

const arr = [ 3, 88, 76, 9, 34, 65];

const oddArr = arr.filter(item => item % 2 === 0);

const divisionArr = oddArr.map(item => item / 2);

console.log(divisionArr); // [44, 38, 17]

//체이닝 기법
const arr4 = arr.filter( item => !(item % 2))
                .map( item => item /2)