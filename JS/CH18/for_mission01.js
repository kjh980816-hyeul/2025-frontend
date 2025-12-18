/* for_mission01.js

*/
for(let i = 0; i<10; i++) { // 이 라인 don't touch
    if (i === 0) {
      i = 0;
    } else  if (i === 9){
      console.log(i);
      i++;
      console.log(i);
    } else {
      console.log(i);
    }
};

//1
//2
//3
//4
//...
//10


/* 정답지
for(let i = 0; i<10; i++) {
  console.log(i+1);
}; */