let max=prompt("enter the maxx number");

const random=Math.floor(Math.random()*max)+1;
let user=prompt("guess the number");
while(true){

if(user=="quit"){
    console.log("user quit");
    break;
    
}
if(user==random){
    console.log("right guess random number is", random);
    break;
}
else if(user<random){
    user=prompt("your guess is smaller plz try again")
}
else{
    user=prompt("your guess is greaater plz try again")
}
}