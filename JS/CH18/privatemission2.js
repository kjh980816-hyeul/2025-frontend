val = 90;

if (val >= 100) {
  console.log('A');
}
else if (val >= 80) {
  console.log('B');
}
else if (val >= 60) {
  console.log('C');
}
else {
  console.log('F')
}

console.log(val >= 100 ? "A" : val >= 80 ? "B" : val >= 60 ? "C" : "F");