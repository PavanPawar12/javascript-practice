// this refers to the object that is currently using the function.

// console.log(this) // this refers to window object 


const user = {
    name: "Pavan",
    age: 22,

    greet: function() {
        console.log(` My name is ,${this.name}`)
    }
}

user.greet()
user.name = "Jivan", // 
user.greet();


// this inside a normal function 


// function one(){
//     let username ="don"
//     console.log(this.username)
// }
// one()


// const code = function (){
//     let username = "rahul"
//     console.log(this.username)
// }
// code()

const code = () =>{
    let username = "rahul"
    console.log(this)
}
code()

// arrow function 

// const addTwo = (num1, num2) =>{
//     return num1 + num2;    // ex
// }
// const addTwo = (num1, num2) =>  num1 + num2;

// const addTwo = (num1, num2) =>  (num1 + num2);

const addTwo = (num1, num2) =>  ({username:"pavan"});


console.log(addTwo(12,3))
