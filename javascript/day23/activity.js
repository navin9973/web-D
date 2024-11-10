let btn=document.querySelector('button');

 function change(){
 let red=Math.floor(Math.random()*250);
 let green=Math.floor(Math.random()*250);
 let blue=Math.floor(Math.random()*250);
let color=`rgb(${red},${green},${blue})`
 
 return color;
 }
 let b=document.querySelector('#heading');
 let c=document.querySelector('.display')
 btn.onclick=function(){
  b.innerText=change();
  c.style.backgroundColor=change();
}


let p=document.querySelector("#tex");
let input=document.querySelector("#inp");

input.addEventListener("input",function(){
 
  let para=(this.value);
  p.innerText=para;

  
  
})
