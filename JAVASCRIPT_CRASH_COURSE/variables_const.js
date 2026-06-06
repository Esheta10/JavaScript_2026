// const -> cannot be re-declared and cannot be updated

// const PI = 3.14;
// PI = 3.17; // type error -> occurs when you try to change the data-types property
// const PI = 3.18; // syntax error -> violates the rules of not re-declaring const

// console.log(PI);

// -> const is also block - scope

// if(true){
//     const name = "Bob";
//     // console.log(name);
// }

// console.log(name);

// const can be hoisted but since its value stays in TDZ we cannot access it -> Reference error

// console.log(age);
// const age = 22;

var a;
let b;

// you have to initialize const with value when declaring
const c = 10;
