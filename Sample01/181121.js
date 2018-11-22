var myColor = ["red", "green", "black"];

console.log(myColor.toString());

//white와 black를 추가하여 새 배열에 넣음
var newColor = myColor.concat("white", "black"); 
console.log(newColor);
console.log(myColor);

//배열의 마지막 요소를 뺄 수 있음
console.log(newColor.pop());
console.log(newColor);

//length를 알려주고, orange 추가
console.log(newColor.push("orange"));
console.log(newColor);
//length를 알려주고, blue 추가
console.log(newColor.push("blue")); 
console.log(newColor);

// 배열 요소의 순서 역순으로 변경
newColor.reverse();
console.log(newColor);

//첫 요소가 사라짐
newColor.shift();
console.log(newColor.toString());
//새로운 요소가 첫번째 요소에 추가됨
newColor.unshift("brown");
console.log(newColor.toString());

//0~1 index의 요소 제거 후 test를 넣음
newColor.splice(0, 2, "test");
console.log(newColor.toString());
//정렬
newColor.sort();
console.log(newColor);