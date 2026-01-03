// var c = 300
let a = 300

if(true){
    let a = 10;
    const b = 20
    console.log("Inner: " ,a)
    

}


// console.log(a)
// console.log(b)
console.log(a)

function one(){
    const username = "pavan"
    
    function two(){
        const website = "pavan.com"
        console.log(website)
    }
    // console.log(website)
    two()
}
one()

if(true){
    const username = "rahul"
    if(username == "rahul"){
        const website = "youtube"
        console.log(username + website);
        console.log(website)
    }
    console.log(username)
}
// console.log(username)