// const tinderUser = new Object();
// console.log(tinderUser)

const user = {}
user.id = '1234ab'
user.name = "Rahul"
user.city = "beed"
// console.log( user)

const regularUser = {
    email:'pavan@gmail.com',
    fullname:{
        userfullname: {
            firstname:"pavan",
            lastname:"pawar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c',4:'d'}

// const obj3 = {obj1 ,  obj2}
// const obj3 = Object.assign({}, obj1, obj2)  // object assign 

const obj3 = {...obj1, ...obj2}
console.log(obj3)


const myUser = [
    {
        id:1,
        email:"pavan@gmai.com"
    },
    {
        id:1,
        email:"pavan@gma.com"
    },
    {
        id:1,
        email:"pavan@gai.com"
    },
]
// myUser.forEach(user=>{
//     console.log(`User ID: ${user.id}, and email: ${user.email}`)
// })

myUser.push({id:2, email:"jivan"})
myUser[0].email = "jivan"
console.log(myUser)
let myuser = myUser.find(user => user.email == "pavan@gmai.com");
// console.log(myuser)

let emails = myUser.map(user => user.email);
console.log(emails)

let result = myUser.map(user => user.id)
console.log(result)