// immediately invoked function expression (IIFE)


(function code(){
    // named IIFE
    console.log(`database connected`)
}) ();


( (name) =>  {
    console.log(`CONNCTED DB ${name}`)
})("pavan")