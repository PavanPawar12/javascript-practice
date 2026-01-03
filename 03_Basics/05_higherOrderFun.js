// Higher order function is function that take another function of return function
// in js array loop like, forEach , map, filter, reduce are higher-order functions

const arr = [1,2,3,4,5,6]
arr.forEach(function(num){
    console.log(num)
})



const newArr = arr.filter(function(num){
    return num % 2 == 0
})
const sum = arr.reduce(function(num, acc){
    return num + acc;
},0)



console.log(newArr)
console.log(arr)
console.log(sum)


const items = [
  { name: "Book", price: 200 },
  { name: "Laptop", price: 50000 },
  { name: "Pen", price: 20 }
];

const total = items.filter(item => item.price > 100).reduce((sum, item) => sum + item.price, 0)

console.log(total)