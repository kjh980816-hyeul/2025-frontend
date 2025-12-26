/* ma_mission03.js */


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
  },
  'filter' : function(fn) {
    const temp = [];
    // let o = 0;
    for(let i = 0 ; i < this.length ; i++) {
      const result = fn(this[i],i)
      // if (result === true) {
      //   temp[o] = this[i]
      //   o++
      // }
      if(result) {
        temp.push(this[i]);
      }
    }
    return temp;
  },
  'map' : function(cb) {
    const val = [];
    for(let i = 0; i < this.length ; i++) {
      val[i] = cb(this[i],i)
    }
    return val
  }
};

const newArr = myArr.map( item => {
  return item +2;
} );
console.log(newArr);
