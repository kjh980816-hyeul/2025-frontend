/* ma_mission01.js */


const myArr = {
  '0': 3,
  '1': 88,
  '2': 76,
  '3': 9,
  '4': 34,
  '5': 65,
  'length' : 6,
  'forEach': function(asdf){
    for(let i = 0 ; i < this.length ; i++) {
      asdf(this[i],i)
    }
  }
};


myArr.forEach((item,idx) => {
  console.log(`arr[${idx}]: ${item}`);
});

