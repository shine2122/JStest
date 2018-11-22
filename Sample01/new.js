var calc = require('./calculate');

console.log('Result : %d', calc.add(3,3));
console.log("Result : %d", calc.subtract(3,3));
console.log("Result : %d", calc.multiply(3,3));
console.log("Result : %d", calc.divide(3,3));

var calc2 = require('./calculate');
console.log('Result2 : %d', calc2.add(4,3));
console.log("Result2 : %d", calc2.subtract(4,3));
console.log("Result2 : %d", calc2.multiply(4,3));
console.log("Result2 : %d", calc2.divide(4,3));