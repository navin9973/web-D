// let num=100;
// if(num%10===0){
//     console.log("good");
    
// }
// else{
//     console.log("bad");
    
// }

// let firstName=prompt("enter name");
// let age=prompt("enter age");
// let msg=firstName+' ' +"is"+ " " +age+' ' +"year old";
// alert(msg);

let quarter=1;
switch(quarter){
    case 1:
        console.log(" jan feb may");
        break;
        case 2:
        console.log(" mar apr may");
        break;
        case 3:
        console.log(" jun jul aug");
        break;
        case 4:
        console.log(" sept oct nov");
        break;
        default:
            console.log("dec");
                    
}

let str="Aolden string";
if((str[0]==="a"||str[0]==="A")&&str.length>5){
    console.log("golden");
    
}
else{
    console.log("not");
    
}

let num1=3784;
let num2=645664;
if(num1%10===num2%10){
    console.log("same last digit which is ",num1%10);
    
}
else{
    console.log("not same last digit");
    
}