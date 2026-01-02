const arr = [
    {id: 'abc', name: '홍길동1'},
    {id: 'bcd', name: '홍길동2'},
    {id: 'cde', name: '홍길동3'}
]

const obj = {};
// for(let i = 0 ; i < arr.length ; i++) {
//     obj[arr[i].id] = arr[i]
// }

function id(item) {
    obj[item.id] = item
    }                   
arr.forEach(id);            //arr.forEach( item => obj[item.id] = item); 동일함
console.log(obj);



// console.log(obj)
// const obj = {
//     abc: {id: 'abc', name: '홍길동1'},
//     bcd: {id: 'bcd', name: '홍길동2'},
//     cde: {id: 'cde', name: '홍길동3'}
// };

// console.log(obj['bcd']);