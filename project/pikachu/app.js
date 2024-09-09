let main=document.getElementById("main");
let s="";
let arr=["https://th.bing.com/th/id/OIP.gJoRLn5tFhUPjVSfesgHZQHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "https://th.bing.com/th/id/OIP.t8bQc-uFXhCOxRcWrYf9HQHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
"https://th.bing.com/th/id/OIP.HFrEQDu_UDTEErBisY8fHgHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
"https://th.bing.com/th/id/OIP.iZDAP1s5TctIgKv7QuSv8wHaHa?w=151&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"];

for(let i=1;i<=50-6;i++){
    let j=Math.floor(Math.random()*3+1);
   s+= ` <div class="card"><img src=${arr[j]} alt="pikachu" ></div>`


}
main.innerHTML=s;