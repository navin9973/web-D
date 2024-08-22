function hello(){
    console.log("heyy shardha");
    
}
hello();
function tableOf(){
    for(let i=1;i<=10;i++){
        console.log(i*5);
        
    }
}
tableOf();

function dice(){
    const num=(Math.floor(Math.random()*6))+1;
    console.log(num);
    
}
dice();

//function with argument
function printName(name){
    console.log(name);
    
}
printName("navin");

function ave(a,b,c){
    console.log((a+b+c)/3);
    
}
ave(3,4,6);


function table(n){
    for(let i=1;i<=10;i++){
        console.log(i*n);
        
    }
}
table(3);

//when we return that means function end we can return only single value if we want to return multiple then we can retrun throught objectc

function sumOf(n){
    for(let i=1;i<=n;i++){
        let sum = 0;
        sum=sum+i;
    }
    return sum;
}
console.log(sumOf(6));
