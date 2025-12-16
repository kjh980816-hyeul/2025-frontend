//if else 3가지를 삼항식으로 풀 수 있나? 라는 생각에 시작

val = 6;

if (val >= 10) {
  console.log('강함');
}
else if (val >= 6) {
  console.log('보통');
}
else {
  console.log('약함')
};

console.log(val >= 10 ? "강함" : val >= 6 ? "보통" : "약함");