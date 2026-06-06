// let -> cannot be re-clared but can be updated

let name = "Bob";
name  = "Alice";

console.log(name);

// -> let is block - scoped

if(true){
    let y=10;
}

//console.log(y); // Reference error

let a;
console.log(a);

// let can be hoisted, but it gives reference error because its value is stored in temporal dead zone and it cannot be accessed before initializing
console.log(age);

let age = 12;
// console.log(age);
