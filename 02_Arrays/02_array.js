const name1 = ['pavan','jivan']
const name2 = ['pranav','antrix']

// const bothname = name1.push(name2)
// console.log(bothname)
// using spread
const all_name = [...name1, ...name2]
console.log(all_name)

// console.log(name1.isArray('pavan')) // isArray is not a function--> error 
// console.log(Array.isArray("pavan"))// false
// console.log(Array.from("pavan"))
// console.log(Array.from({from:'pavan'}))

console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray("[]"));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false

let n1= 12
let n2= 13
let n3= 14
console.log(Array.of(n1,n2,n3))
