const dan = parseInt(Math.random()*10.0)+10 ; 
console.log('dan:', dan); //5

for ( let i = 1 ; i <20 ; i++) {
  console.log(`${dan} X ${i} = ${dan*i}`);
}