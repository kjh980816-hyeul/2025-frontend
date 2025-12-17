/* switch.js
switch(값) {  
    case 1: // :(콜론)과 break; 키워드 사이의 코드가 실행이 된다.

      break;
    case 2:
      숫자값이 2였을 때 실행하고 싶은 코드 작성
      break;
    case 3:
      숫자값이 3였을 때 실행하고 싶은 코드 작성
      break;
    default:
      if문의 else와 같다.
      break;
}
*/

const mon = parseInt(Math.random()*12)+1; // 1~12사이 랜덤값
console.log(mon);
switch(mon) {
  case 1:
  case 2:
  case 12: console.log(`겨울`)
  break;
  case 3:
  case 4:
  case 5 : console.log("봄")
  break;
  case 6:
  case 7:
  case 8: console.log("여름")
  break;
  default:console.log("가을")
}