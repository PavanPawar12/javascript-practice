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
    lastLoginday:['monday','saturday']
}

console.log(jsUser["location"])
console.log(jsUser["full name"])
console.log( jsUser[mySym])

jsUser.email = "jivan@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "google@gmai.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js!")
}
console.log(jsUser.greeting());

const student = {
    name:"pavan",
    age:20,
    isStudent:true,
    email:'pava@gmai.com',
    isLogin:true,
    lastLoginday:['monday','saturday'],
}
// console.log(student['email'])