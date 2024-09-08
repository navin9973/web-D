let x=document.getElementById("s1");
x.addEventListener("mouseenter",function(){
    let y=Math.floor(Math.random()*100+1);
    x.innerHTML=`<h1>${y}</h1>`
})
x.addEventListener("mouseleave",function(){
    x.innerHTML="<h1>1</h1>"
})
let a=document.getElementById("s2");
a.addEventListener("mousemove",function(){
    
    a.innerHTML="y";
})
a.addEventListener("mousleave",function(){
    a.innerHTML="a";
})