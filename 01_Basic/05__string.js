const name = "Pavan"
const repocount = 30
// console.log(name  + repocount +"value")

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

// You need to master of string method
const strName = new String("Pavan")
console.log(strName[0])
console.log(strName.__proto__)  // {}
console.log(strName.toUpperCase())  // PAVAN
console.log(strName.toLowerCase())  // pavan
console.log(strName.charAt(2)) // 'v' 
console.log(strName.indexOf('P')) // 0 position 

const newString = strName.substring(0, 4) // Pava
console.log(newString)

const anotherStting = strName.slice(-8, 4);
console.log(anotherStting);

const newStringOne = "  Pavan   "
console.log(newStringOne);  // "  Pavan   "
console.log(newStringOne.trim()); //"Pavan"

const url = "https://www.google.com"
console.log(url.replace("www", "pavan")); //https://pavan.google.com 

console.log(url.includes("pavan")) // false