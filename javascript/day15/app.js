console.log("my name ");
console.log("guru nanak dev engineering collage");
let a=3;
let b=4;
console.log(a+b);
let pencilPrice=10;
let penPrice=5;
let output=`Total price is: ${pencilPrice+penPrice} Rupees.`
console.log(output);
//if else condition 
a=41;
if(a>=18){
    console.log("you can vote");
    console.log("you can drive");

}

let color= 'red';
if(color=='red'){
    console.log("stop");
}
if(color=='yellow'){
    console.log("go slow");
}
if(color=='green'){
    console.log("go");
}

let price ='xl';
if(price==='xl'){
    console.log("price is 250");
}
else if(price==='l'){
    console.log("price is 200");
}
else{
    console.log("price is 100");
}

let st="apple";
if(st[0]==="a"&& st.length>3){
    console.log("good string");
    
}
else{
    console.log("not god string");
    
}

//switch
let day=9;
switch(day){
    case 1:
        console.log('monday');
        break;
        case 2:
        console.log('tuesday');
        break;
        case 3:
        console.log('wednesday');
        break;
        case 4:
        console.log('thursday');
        break;
        case 5:
        console.log('friday');
        break;
        case 6:
        console.log('saturday');
        break;
        default:
            console.log("sunday");
            
}

// //alert and prompt
// alert("something went wrong");
// console.error("error in something");

// let firstname=prompt("enter your name"); //prompt is used for input
// console.log("firstname");

let firstname=prompt("enter first name");
let secondname=prompt("enter second name");
let msg="welcome " +  +firstname +  +secondname;
alert(msg);

