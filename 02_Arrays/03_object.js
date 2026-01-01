/*
What is an Object in JavaScript?
-An object in JavaScript is a collection of key-value pairs.
-Keys are called properties (like name, age).
-Values can be anything: numbers, strings, arrays, functions, or even other objects.
*/

// singlton 
// object literals 

const mySym = Symbol("theKey");

const jsUser  = {
    name:"pavan",
    "full name": 'pavan pawar',
    mySym:"comming from symbol",
    age:21,
    location:'kolhapur',
    email:"pavan@gmail.com",
    isLogginIn:false,
    lastLoginday:['Monday','Saturday']
}

// console.log(jsUser["location"])
// console.log(jsUser["full name"])
// console.log( jsUser[mySym])
// console.log(jsUser)

jsUser.email = "jivan@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "google@gmai.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js!")
}
jsUser.greetingTwo = function(){
    console.log(`Hello  ${this.name}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

