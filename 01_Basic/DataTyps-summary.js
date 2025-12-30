// Primitive 

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null // object 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 124455346343n // bigint


// Reference (Non Primitive)

// Array, Objects, Functions 

const heros = ['pavan','akshay', 'tiger'];
let myObj = {
    name: "yuraj",
    age: 20,
}

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof outsideTemp)