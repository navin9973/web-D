//first element
let x=document.getElementById("s1");
x.addEventListener("mouseenter",function(){
    let y=Math.floor(Math.random()*100+1);
    x.innerHTML=`<h1>${y}</h1>`;
})
x.addEventListener("mouseleave",function(){
    x.innerHTML="<h1>1</h1>";
})


//second element
let b=document.getElementById("s2");
let clr="red";
b.addEventListener("mouseenter",function(){
    if(clr=="red"){
        b.style.backgroundColor="red";
        clr="green";
    }
    else if(clr=="green"){
        b.style.backgroundColor="green"
        clr="blue";
    }
    else{
        b.style.backgroundColor="blue"
        clr="red"; 
    }
   
})
b.addEventListener("mouseleave",function(){
    b.style.backgroundColor="white";
})

// 3rd element
let a=document.getElementById("s3");

a.addEventListener("mouseenter",function(){
    let m=Math.floor(Math.random()*255+1);
    let n=Math.floor(Math.random()*255+1);
    let o=Math.floor(Math.random()*255+1);
    a.style.backgroundColor=`rgb(${m},${n},${o})`;
   
})

a.addEventListener("mouseleave",function(){
    a.style.backgroundColor="white";
})

//fourth element
let c=document.getElementById("s4");

c.addEventListener("click",function(){
    let m=Math.floor(Math.random()*255+1);
    let n=Math.floor(Math.random()*255+1);
    let o=Math.floor(Math.random()*255+1);
    a.style.backgroundColor=`rgb(${m},${n},${o})`;
    x.style.backgroundColor=`rgb(${n},${m},${o})`;
    b.style.backgroundColor=`rgb(${n},${o},${m})`;
 
  
   
})
c.addEventListener("mouseleave",function(){
    x.style.backgroundColor="white";
  a.style.backgroundColor="white";
  b.style.backgroundColor="white";
})

//cursor move

let main=document.getElementById("main");
let cur=document.getElementById("cursor");
main.addEventListener("mousemove",function(dets){
   
    cur.style.left=dets.x+"px";
    cur.style.top=dets.y+"px";
    

})
