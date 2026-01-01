let arr = [0,1,2,3,4];
// for(let i = 0; i < arr.length; i++){
//     console.log(i + i)
// }
console.log(arr)


let arr1 = new Array(1,2,3,4)
// console.log(arr1[2])

// some methods of arrays
arr.push(6)
arr.unshift(9)
arr.shift()

console.log(arr)
console.log(arr.includes(4))
console.log(arr.indexOf(3))

let newArr = arr.join()
console.log(newArr)

console.log(arr)

let names = ['pavan','jivan','antrix','sharvil']

// slice and splice

// slice --> The slice() method is used for extracting a portion of an array (or string) 
// and returns a new array (or string) containing the extracted elements
// Syntax: array.slice(start, end)
console.log(names.slice(0,2))
console.log(names)
console.log(names.splice(1,3))
console.log(names)


// iterate over an array 
const fruits = ["Apple", "Mango", "Cherry"];
for(const  fruit  of fruits){
    if(!(fruit == "Mango")){
        // console.log(fruit)
    }
}

fruits.forEach((item, index,array) =>{
    // console.log(item,index)
})


const moreFruits = ['mango', 'carry']

const combineFruits = fruits.concat(moreFruits)
console.log(combineFruits)


// -----copy of array------
// copy using spread syntax
const fruitsCopy = [...fruits]
console.log(fruitsCopy)

// create copy using form method()

const fruitsCopy1 = Array.from(fruits)
console.log(fruitsCopy1)
