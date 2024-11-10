let h=document.querySelector("#inp");
let l=document.querySelector("ul");
let b=document.querySelector("button");

 
b.addEventListener("click",function(){

  let item=document.createElement("li");
  let del=document.createElement("button");
  del.innerText="delete";
  del.classList.add("delete");
  item.innerText=h.value;;
   l.appendChild(item);
   item.appendChild(del);
   h.value="";
})

l.addEventListener("click",function(event){
if(event.target.nodeName=="BUTTON"){
  let par=event.target.parentElement;
  par.remove();
}

})
  
  
  




