// for( i = 1; i <= 5; i++){
//     // document.writeln(i + "<br/>")
// }

// let product = ['banana', "panana", "other"]
// for (let j = 0; j< product.length; j++) {
//    console.log(product[j] );
// }

let i = 0;

do {
//   console.log(i);
  i++;
} while (i < 5);


let nums = [10,20,30,40];

for(let num of nums){
    // process.stdout.write(num + " ");
}


const arr = ['apple', 'banana', 'cherry']
let line = '';
for(let fruit of arr){
    line += fruit + ' ';
}
// console.log(line.trim())

// here we need to use forin loop for object 
let user = {
    name:"pavan",
    age:23,
    city:"beed",
}
for(let key in user){
    // console.log(key,`->`, user[key])
}

// function 
function addNumber(){
    let ans = 0;
    for(i = 0; i < arguments.length; i = i+1){
        ans = ans + arguments[i];
    }
    return ans;
    
} 

// spread operator
function addNumberV2(...pavan){
    let ans = 0;
    for(let i = 0; i < pavan.length; i++){
        ans = ans + pavan[i];
    }
    return ans;
}

let result = addNumberV2(1,2,3,4,5 , 100);
// console.log(result)


// Arrow function

// 1. Syntax 
const sayHello = () => {
    // console.log("Hi Pavan");
}

const add = (a , b) =>{
    return a + b;
}
// console.log(add(3, 2))


const  addNumbers = (...nums) =>{
    // console.log(nums) // argument is not allow in arrow function 
}
// addNumbers(1,2,33)


sayHey()
// Hoisting --> call before function 
function sayHey(){
    // console.log("Hey there")
}

// This Keyword
const obj = {
    value:20,
    myFunction: function() {
        console.log( this)
    }
   
}
// obj.myFunction()


// ================ High order function and callback=====================

function sum(a, b, cb){
    let result = a + b;
    cb(result);

    return () => console.log(result);

}

// function showResult(result){
//     console.log(result);
// }

// sum(3,6,showResult)
// sum(10,10, (val) => console.log(val));
let resultFunction  = sum(10,30, () => {});
resultFunction()

function getSum(a, b, cb){
    let result = a + b;
    console.log(cb(result));
}
getSum(1, 3, function (val){
    console.log(val)
})


function SubStract(){
    return a + b;
}
let re = SubStract(2);
console.log(re)

