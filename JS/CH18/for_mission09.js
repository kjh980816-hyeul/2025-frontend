/*for_mission09.js*/


const star = parseInt(Math.random()*5.0)+3; // 3~7 사이 랜덤값

console.log(star)

let i = ''
for(let o = 0; o < star ; o++){
    for(let k = 0; k < 1 ; k++) {
        i += "*"
    } 
    console.log(i)
}


// 예) 5
// *****

