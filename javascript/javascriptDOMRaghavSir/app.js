let x=document.querySelector("h1");
console.log(x);
x.style.color="red"; //css can we change
let y=document.querySelector("h2");
y.innerHTML="Navin";  //html is changed

setTimeout(function(){
    y.innerHTML="Software engineer";
},2000)

let z=document.getElementById("pr");
z.addEventListener("click",function(){
  z.style.color="yellow";
  z.style.backgroundColor="red";
})
z.addEventListener("mouseleave",function(){
    z.style.color="black";
    z.style.backgroundColor="white";
  })
let ya=document.querySelector("h3");
y.addEventListener("click",function(){
    ya.style.color="blue";
    ya.style.backgroundColor="orange";
})
