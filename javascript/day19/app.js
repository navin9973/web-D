function hello() {
    console.log("heyy shardha");

}
hello();
function tableOf() {
    for (let i = 1; i <= 10; i++) {
        console.log(i * 5);

    }
}
tableOf();

function dice() {
    const num = (Math.floor(Math.random() * 6)) + 1;
    console.log(num);

}
dice();

//function with argument
function printName(name) {
    console.log(name);

}
printName("navin");

function ave(a, b, c) {
    console.log((a + b + c) / 3);

}
ave(3, 4, 6);


function table(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(i * n);

    }
}
table(3);

//when we return that means function end we can return only single value if we want to return multiple then we can retrun throught objectc

function sumOf(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {

        sum = sum + i;
    }
    return sum;
}
console.log(sumOf(6));


let str = ["hi", "hellow", "bye"];

function concat(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result = result + str[i];
    }
    return result;
}
console.log(concat(str));
//function variable are access inside the function called function scope
//globle variable can we access from any where
//block scope means variable inside {} is cannot used outside of it except var key word

let greet = "hello";  //globle scope
function outerGreet() {
    let greet = "namaste";  //function scope
    console.log(greet);
    function innerGreet() {
        console.log(greet); //lexical scope

    }
    innerGreet();

}
console.log(greet);
outerGreet();

//another way to define a function

let sum = function (a, b) {
    return a + b;
}

console.log(sum(2, 3));
//function jo dusre gunction ko as a argument leta h ya function ko return krta h usse hm high order function kahte h
//function which is define in object is called method

const cal = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    },

    div(a, b) {
        return a / b;   //we can also write methid like this in object
    }
};

console.log(cal);
console.log(cal.add(2, 4));




