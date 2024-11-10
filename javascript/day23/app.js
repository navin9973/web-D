//event ka matlab kuch v hota h page tb sb event h 

let buttn=document.querySelector("button");
console.log(buttn)

// buttn.onclick=function(){
//   console.log("clicked")
// }

//function alag bana ke call krna shi rhta h
function sayHello(){
  console.log("hello")
}

buttn.onclick=sayHello;

//page pr share button pr click hone pr kuch event ho uske liye hm 
 
let btn=document.querySelectorAll("button");
 for(ele of btn){
  ele.onclick=sayHello;
  ele.onmouseenter=function(){
    console.log("enter in button area")
  }
 }