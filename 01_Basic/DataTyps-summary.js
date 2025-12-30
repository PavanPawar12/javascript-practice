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
console.log(typeof outsideTemp);



//--------------------------------------------------

// Stack (Primitive), Heap (Non-Primitive)

let myname = "pavan"
let anothername = myname
anothername = "jivn"

console.log(myname)
console.log(anothername)

let userOne ={
    email:"email@google.com",
    upi:"user@ybl"
}
let userTwo = userOne

userTwo.email = "pavan@google.com"
console.log(userOne.email)
console.log(userTwo.email)

/*

🔹 What is Stack?

-Stack is a small and fast memory.
-It stores primitive data types.
-Memory is managed in LIFO (Last In, First Out) order.
👉 Stack stores actual value, not reference.

🔹 What is Heap?

-Heap is large but slower memory.
-It stores non-primitive (reference) types.
-Variables store reference (address), not the actual value.
👉 Heap stores reference, not copy.
*/