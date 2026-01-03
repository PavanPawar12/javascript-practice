// const c = "z"
let b = "y";
function justPrint(){
    let a = 'x';  // local scope
    // console.log(a)
    // console.log(b)
}
// console.log(c)
// console.log(a)
justPrint()


function sum(a, b){
    return a + b
}
let result = sum(4,5);
// console.log(result)


function isLoggin(name="jon"){
    if(!name){
        console.log('please enter the name')
        return 
    }
    return `${name} just loggin`
}
// console.log(isLoggin())

function calculatePrice(v1, v2, ...num1){
    return num1;
}
console.log(calculatePrice(1,2,3,4,5))


const user = {
    name:"pavan",
    price:123
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and ${anyobject.price}`)
}
handleObject({
    name:"jivan",
    price:12345,
})


const myArr = [1,2,3,4,5,6]
function getSecondValue(getValue){
    // return getValue
    return getValue[2]
}
// console.log(getSecondValue(myArr))
console.log(getSecondValue([1,1,1,1,1,1,2]))


console.log(addSum(23))
function addSum(num){
    return num;

}

console.log(addTwo(245))
const addTwo = function(num){   // concept of hoisting
    return num + 2;
}