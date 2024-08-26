// try and catch is used to find the error in the code

//arrow function syntax

let sum =(a,b)=>{
    console.log(a+b);
    
}
sum(3,4);


let mul=(a,b)=>(
    a*b //it is called implicit return
)
console.log(mul(2,4));

// set timeout function is used to execute the function on given time
 console.log("hello");
 setTimeout( ()=>{
 console.log("GNE");
 
 },2000);
 console.log("welcome to ");
 
//  setInterval function is used to execute the code on given time continously

console.log("hello");
let id =setInterval( ()=>{
console.log("GNE");

},2000);
console.log("welcome to ");

//to stop setinterval we use this
console.log(id);
clearInterval(id);

//practice
  let sqr=(n)=>( n*n)
console.log(sqr(3));
  
let id2=setInterval(()=>{
    console.log("hello");
    
},2000);
setTimeout(()=>{
    clearInterval(id2)},10000);