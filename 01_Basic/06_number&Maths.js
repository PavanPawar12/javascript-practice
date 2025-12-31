const score = 400
console.log(score);

const anotherScore = new Number(500);
console.log(anotherScore);

console.log(anotherScore.toString())
console.log(anotherScore.toString().length)
console.log(anotherScore.toFixed(2))

const anotherNumber = 123.4232
// console.log(anotherNumber.toPrecision(4))

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'))

// -----------------------------------Maths---------------------------
// console.log(Math)
// console.log(Math.abs(9))  // absolute 
// console.log(Math.round(4.3)) // 4 if 4.6-> 5
// console.log(Math.ceil(4.3)) // top 5
// console.log(Math.floor(4.3)) // bottom 4
// console.log(Math.max(1,2,3,12))
// console.log(Math.min(1,2,3,12))

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
