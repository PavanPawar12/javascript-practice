const accountId = 1234;
let accountEmail = "pavan@gmail.com"
var accountPassword = 123455;
accountyCity = "beed"; 


let accountState;
//accountId = 333333; // not allowed 
accountPassword = 93222232;
accountEmail = "jiavan@gmail.com"
accountyCity = "maharashtra";

console.table([accountId, accountEmail, accountPassword, accountyCity, accountState])
console.log(accountId)

/*
prefer not to use var
because of issue of block scope and function scope
*/


// learn notes:- let and const 
/*
let --> 1) Allowed. The variable can be assigned a new value.
        2) Can be declared without an initial value.
        3) 
const -->1) const cannot be reassigned after their initial value is set.
        2) Must be assigned a value during declaration. 
    
 */