/*for_mission09.js*/


const star = parseInt(Math.random()*5.0)+3; // 3~7 사이 랜덤값

console.log(star)

let i = ''


for (let j = 0; j < star ; j++){
    for(let k = star-1; k > j ; k--) {
        i += "-"
    }
    for (let o = -1 ; o < j ; o++) {
        i += "*"
    }   
    i += "\n"
}
console.log(i);

// let k = 0
// let o = 1

// for (let j = star; j > 0 ; j--) {
//     for (let k = 0; k < o ; k++) {
//         if (o < j ) {
//             i += "_"
//             o++
//         } else {
//             i += "*"
//             o = 1
//         } 
//     } 
//     i += "\n"
    
// }
// console.log(i);

// 예) 5
// *****

