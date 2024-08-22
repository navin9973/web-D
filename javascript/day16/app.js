//trim method is used to remove the extra space from end and start
let str = "welcome Navin  ";
console.log(str);

let newpas = str.trim();
console.log(newpas);

let low = str.toLowerCase();//used to convert the all vaule in lower alphabate
let up = str.toUpperCase();//used for upper alphabate
console.log(low);
console.log(up);

let index = str.indexOf("N");
console.log(index);
let newstr = str.trim().toUpperCase()//this is called method chaining we use many method in one line
console.log(newstr);

//slice is used to cut out the part of string we use index n+1 for last value
console.log(str.slice(0, 3)); //str.slice(-num)=str.slice(length-num)

//replace the value
console.log(str.replace("Navin", "vivek"));

console.log(str.repeat(3));//repeat is used to repeat the string value 

//practice
let msg = "Hello!";
console.log(msg.trim().toUpperCase());


//array
let student = ["navin", "vivek", "jay"];
let nums = [1, 4, 2, 7, 9];
let info = ["navin", 20, 73.2];  //we can store different data types value in javascript array
let empty = [];
student[0] = "vijay";  //we can change in array it is mutable
student.push("randhir");
console.log(student);  //push is used to add new value in end of array
student.pop();  //pop is used to delete the end valule of array
console.log(student);
student.unshift("randhir");  // unshift is used to add value in starting position in array
console.log(student);
student.shift();  // shift is used to delete value in starting position in array
let blocked = student.shift(); //in this way we can store the deleted value 
console.log(student);
console.log(blocked);

//practice

let month = ["jan", "july", "may", "augh"];
console.log(month);
month.shift();
month.shift();
month.unshift("june");
month.unshift("july");
console.log(month);


//indexof is used to find the position or indedx of the element in array

let car = ["bmw", "ford", "swift", "kia"];
let posi = car.indexOf("kia");
console.log(posi);

let elm = car.includes("kia");
console.log(elm);


//concat is used to add  two array
let newarray = student.concat(car);
console.log(newarray);
//reverse is used to reverse the array elment
car.reverse();
console.log(car);

//slice in array is use to copy a portion of array end is (n-1)
console.log(car.slice(1, 4)); //it print from 1 to n-1 is 3
console.log(car.slice(-2)); //negative value is use to print from last element it print two last element

//splice is use to remove / replace/add element in array
//splice(start,deletecoutn,item1...itemn)
console.log(car);
console.log(car.splice(0, 1, "rr"));
console.log(car);
console.log(car.splice(0, 0, "rr", "tyota"));
console.log(car);
console.log(car.sort());

//array references
const arr = [2, 3, 5];
arrcopy = arr;  //in arr and arrcopy have same adress 
arr.push(6)
console.log(arr);
console.log(arrcopy);
//contant array ka matlab hota h hm array  ka value change kr shakte h pr hm arr ka address kisi dusre
//adress me nhi store kr shakte h aur na to kisi dusre array ka adress constant array me store kr shakte h

//nested array
let number=[[2,3],[4,5],[6,7]];
console.log(number);
console.log(number[0][1]);



