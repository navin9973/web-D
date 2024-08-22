//object litral is an data type use to store the key and value in good way

let student = {   //if we use const in place of let then array ke jaisa iska v memory address fix ho jayega 
    name: "navin",  //hm andar ka value change kr shakte h pr address nhi
    age: 20,
    marks: 9
};

console.log(student);

const iteam = {
    price: 30,
    discount: 2,
    color: ["red", "green"]
}

const post = {
    username: "@navin181kumar",
    content: "#memory",
    like: 20,
    repost: 4,
    tag: ["@shardha", "@sharvari"]
}

//to print the particular value of object obejctname["key"]
console.log(post["tag"]);
//another way to print 
console.log(post.tag);

//javascript automatically convert the key in string

//add or update value in object
const stud = {
    name: "navin",
    class: "btech",
    roll: 402,
    time: 2

}
stud.time = 4;
console.log(stud.time); //update

stud.gender = "male"; //add
console.log(stud);
delete stud.time; //use to delete
console.log(stud);

//nested object

const studentinfo = {
    aman: {
        name: "navin",
        roll: 2,
    },
    jay: {
        branch: "it",
        state: "bihar"
    }
}
console.log(studentinfo.jay.state);

//array of object
let list = [
    {
        name: "navin",
        color: "red",
        size: "small",
    },
    {
        branch: "it",
        state: "bihar"
    }

]

// //maths object is an inbuild object which have collection mathematical properties
// let num= Math.random();
// num=num*10;  //to make ti in range 1 to 10
// num=Math.floor(num);
//num=num+1;
// console.log(num);
