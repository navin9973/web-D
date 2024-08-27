//array method
//forEach()

let arr = [1, 3, 2, 4, 4];
let print = function (el) {
    console.log(el);

};

arr.forEach(print)

//map function

// let ar=[1,2,3,4,5];
//  let double=ar.map(function (el){
//     return el*2;
//  })
//  console.log(double);

//  we can also use arrow function 

//filter function se hame ek naya array milta h filter function me condition true hota h tb naya array me value insert ho jata h

let num = [2, 3, 4, 5, 6, 7, 8];
let even = num.filter((el) => {
    return el % 2 == 0;
});
console.log(even);
//  every function true ya false value deta h jb array ke sare value pr condition true ho tb true deta h nhi to false  ek v condition false hua to    


// reduce function is used to reduce the array by single value
// array ke value ko individual vejne ke liye spread ka use karet h
let a = [12, 3, 4, 576, 32, 1];
let ans = a.reduce((res, el) => {
    if (res > el) {
        return el;
    }
    else {
        return res;
    }
});
console.log(ans);

// default parameter is used to assign the default value of parameter
// jb hmlog parameter pass karege tb default value change ho jayega nhi to default bala as a parameter kam karega

function add(a, b = 2) {
    a + b
}
add(2, 4);
// spread is used to expand aur ek ek kr ke value vejne ke liye

let result = Math.min(...a);
console.log(result);
console.log(...a);
// multiple array can assign in single array by spread (...arr1,...arr2)




let length = 4;

function callback() {
    console.log("C",this.length);

}

const object = {
    length: 5,

    method(callback) {
        callback();
    }

}

object.method(callback)
