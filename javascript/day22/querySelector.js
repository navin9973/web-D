// // console.dir(document.querySelector("h1"));

// // console.dir(document.querySelector("#description"));

// // console.dir(document.querySelector(".oldImg")); // only 1st class is selected

// // console.dir(document.querySelector("p"));


// //  console.dir(document.querySelector("div a")); // only 1st anchor tag


// //  console.dir(document.querySelectorAll("div a")); // All anchor tag within div

// // let para = document.querySelector("p");
// // console.dir(para); 

// // console.log(para.innerText);
// // console.log(para.innerHTML);
// // console.log(para.textContent);

// // manipulating attribute
// let img = document.querySelector("img");
// console.log(img);
// console.log(img.getAttribute("id"));  //mainImg
// img.setAttribute("id", "spidermanImg");//mainImg change to spidermanImg
// // img.setAttribute("src", "spidermanImg.jpg");//mainImg change to spidermanImg

// //Manipulating style inline property
// console.log(img.style);
// let heading = document.querySelector("h1");
// heading.style.color = "purple";
// heading.style.backgroundColor = "yellow";

// let links = document.querySelectorAll(".box a");
// for(let i = 0; i< links.length;i++){
//     links[i].style.color = "green";
// }

// //classlist Properties
// console.log(img.classList);

// heading.classList.add("pqr");
// heading.classList.add("green");
// console.log(heading.classList);
// heading.classList.remove("green");
// console.log(heading.classList.contains("green"));
// console.log(heading.classList.contains("pqr"));
// heading.classList.toggle("pqr") //-->remove
// // heading.classList.toggle("pqr") //-->added


// let box = document.querySelector(".box")
// // box.classList.add(yelloBg);

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