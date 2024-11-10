document.getElementById("mainImg");  //isme document inbuild javascript ka ek object h jo html ke saare tag aur proprty ko collect krta h agar hmko kuch v chnage krna h to hm document me se us property ko excess kr usko chnage kr shate h document ke collecton property v khud me ek object h jo khud v bahut uske propety ka collection kiya h 
let imgObj = document.getElementById("mainImg");
console.log(imgObj);
  //getelemnentbyid  document object ak ek method h aur hmko ek html element ka object deta h id nahi rhat h tb null deta h

"https://cdn.marvel.com/u/prod/marvel/i/mg/f/40/51dd9c3f4ad5b/portrait_uncanny.jpg"

imgObj.src = "https://cdn.marvel.com/u/prod/marvel/i/mg/f/40/51dd9c3f4ad5b/portrait_uncanny.jpg" //hm img object ke andar src property ko direct print kra rhe h imgObj.src


document.getElementById("description") 

 let paraObj = (document.getElementById("description")); //dir ka use krte h us object ke proprty ko print krne ke liye
 console.dir(paraObj);

//selecting element by class name
//classname se select krne ke hmtl ka collection milta h isme share element object hota h matlab html object ke collect krna h isme hm index wise kuch kr shakte h change ya manuplate  class name nhi rhta h tb empty html collection milta h
let img = document.getElementsByClassName("oldImg");
console.dir((img) );
console.log(img);

for(let i = 0;i<img.length;i++){
    console.log(img[i]);     //isme o html collection ke index wise elemnt dega
}
for(let i = 0;i<img.length;i++){
    console.dir(img[i]);    //isme harek index ka element ka directory dega
}
for(let i = 0;i<img.length;i++){
    console.dir(img[i].src);  //isme harek index ke element particular proprty dega 
}

//isse share image ka source change ho kr new link bala image ho jayega 
for(let i = 0;i<img.length;i++){
    img[i].src = "https://cdn.marvel.com/u/prod/marvel/i/mg/f/40/51dd9c3f4ad5b/portrait_uncanny.jpg"
    console.log(img[i]);
}

//selecting element by tag name 
//hm html element ko tag mame se v select kr shakte h aur isse hmko html ka collection milta h same jaise classname se select krne se milta h
document.getElementsByTagName("p");
document.getElementsByTagName("p")[1].innerText = "abc";


///query selector v same h method jaisa  isko v hm html element ko select kr ne ke liye use krte h isme css ka jaisa kuch kuch tarika h select krna ka 

document.querySelector("h1");
console.log(document.querySelector("h1"))
console.log(document.querySelector("#mainImg"))   //query selector srif single element ke object ko return kr ke deta h agar jaisa class name agar same 4 elemnent ka tab ho sb se pahle bala ko return krke dega
 console.dir(document.querySelector("div a"))  //isme sb se pahle jo div h usme jo sb se pahle jo ancher tag h usko return kr dega 
 console.dir(document.querySelectorAll("div a")) //agar hmko div ke andar ka pura ancher tag chahiye tb hm queryselectorAll ka use krege aur ye hmko nodelist me object return kr ke dega nodelist tree ke andar me sb object ko node bolte h 
  
 //manuplation 
 //innerText ineerText me srif ho chij screen pr dhikta h o change hota h

 //innerHTML  me jo v html tag h o v dhikta h agar hmko koi tag use krna h change karne time jaise <b> tag bolt krne ke liye tb hm innerHTML se change krna hoga tab tag v change hoga

//  innerContent se o v dhikta h jiko hmne hide kiya h jaha jaha hmtl me line khatam hua h o v dhukega /n likh kr iska matlb h ki html me jo h sb dhikega



//manuplation by attributes like class and id 

// select krne ke liye (obj.getAttribute(attribute)) krna hoga
// change krne ke liye (obj.setAttribute(attri,value change krna h o)

img.getAttribue('id')
img.setAttribute('id','spiderman')


//manuplatiopn by style property
//style proprty se hm inline property ko excess kr shakte h css file ki style ko nhi

let box=document.querySelector('.box');
console.log(box.style);
  //manuplationg by class
  let image =document.querySelector("img");
   image.classlist;  //issse jitna v class ka naam hoga  aa jayega
   image.classlist.add("abc");  //isse new class add hota h  //agar hm pahle se koi class me kuch css proprty add kr ke style.css file me rakh shkate h phir usko jb hm image.classlist.add("green") karege tb mera o propety usse pr lg jayegas

image.classlist.remove("green")// agar green class ki property htana ho tab

image.classlist.contains("underline")// check krne ke liye use karte h class h ya nhi agar underline class hoga tb true dega nhi to false dega 

image.classlist.toggle("underline")//iska use hm tb karte h jb hm koi chij aagr h to remove krna h aur nhi h tb add krna h 



// // Nevigation on Page
// let h4 = document.querySelector("h4");
// console.log(h4.parentElement);
// console.log(box.children);

// console.log(img.previousElementSibling);
// img.previousElementSibling.style.color = "pink";


// // Adding element on page
// document.createElement("p");
// let newP = document.createElement("p");
// console.dir(newP);
// newP.innerText = "Hi , I m new para";
// console.dir(newP);
// let body = document.querySelector("body");
// body.appendChild(newP);

// //creating button
// let btn = document.createElement("button");
// btn.innerText = "Click me!"
// box.appendChild(btn);


// //removing elements
// body.removeChild(newP);
// // body.remove();