// var
// function scoped
// can be re-declared and updated

// console.log(age); // can be hoisted -> undefined


// var age = 25;
// var age = "Esheta"
// console.log(age);

// // variables leak outside since they ignore block - boundaries
// // before 2015, it was the only way to declare variables in JS
// if(true){
//     var name = "Alice";
// }
// console.log(name);


// // we dont't use var in modern JavaScript


// // let -> block-scoped
// // can be updated but not re-declared
// // hoisted -> but not initialised, accessing before declaration leads to reference error as the variable is stored in TDZ

// let name = "Bob";
// // let name ="John";

// name = "Alice";

// console.log(name);

// if(true){
//     let y = 10;
//     console.log(y);
// }
// // console.log(y);


// const ->
// block-scoped
// cannot be re-declared and updated
// must be initialized at declaration
// object / arrays declared with const can still have their contents mutated

// const PI = 3.14;
// console.log(PI);


// PI = 3.17;
// const name;

let name;
var age;

const user = {
    name: "Bob"
}
user.name = "Alice";
console.log(user.name);

// Rule of Thumb :  use const by default, switch to let when you need to reassign and avoid var

// 1. no spaces allowed
// 2. must start with $ , _  or letter
// 3. case-sensitive (name != Name)
// 4. don't use reserved keywords

let userName = "Esheta";
let _temp = 0;
let $age = 10;


// let 10name = "Bob";
