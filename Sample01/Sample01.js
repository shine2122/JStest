// let name = "홍길동"
// let age = 38;
// console.log(age);

let name = "DongSeop";
let len = name.length;
console.log(len);
//이미 선언한 string의 일부 변경
let newName = name.replace('Dong', 'Kim');
console.log(newName);
//문자열에서 지정한 위치의 문자 출력
let char = newName.charAt(2);
console.log(char);
//대문자열과 소문자열 출력
console.log(newName.toUpperCase());
console.log(newName.toLowerCase());
//연산자 사용의 예
var x = 0;
x += 5;
console.log(x);
console.log('hello' + 'world');
console.log('1' + 2 + 3 + 4 + 5);

console.log(123 === '123');