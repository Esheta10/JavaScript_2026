// JS is dynamically-typed language -> it's type is decided at run-time

// 1. Number -> integer, floating - point, infinity

let n1 = 100; //integer
let n2 = 100.2; //fp
let n3 = Infinity;
let n4 = "text"/2; 

console.log(typeof(n1));
console.log(typeof(n2));
console.log(typeof(n3));
console.log(typeof(n4));

//2. String -> sequence of characters, double-quotes, single-quotes, template-literal

const s1 = "Saurav";
const s2 = 'Parth';
const s3 = `Arunima`;

console.log(typeof(s1));
console.log(typeof(s2));
console.log(typeof(s3));

const name = "Alice";
const age = 13;

console.log("My name" + " is " + name + " and I am " + age  + " years old."); // String concatenation
console.log(`My name is ${name} and I am ${age} years old.`); // Template-literal

// 3. Boolean -> true/ false
// Type coercion: === ,  == , !== , !=

if(name === "Alice" && age < 18)
    console.log("cannot vote");
else 
    console.log("can vote");

// 4. Null type -> intentionally specifying the value as null by the developer 

const name2 = null;
console.log(name2);

// 5. undefined ->  automatically set by the JS Engine, when no other value is provided to the variable

let name3;
console.log(name3);

// 6. Symbol type -> unique and distinct
// Twpo symbols can never be same , even if they have same statements inside them

const s4 = Symbol("Esheta");
const s5 = Symbol("Esheta");

console.log(s4 == s5);

// 7. BigInt -> int has a range of 2^53 or 9 quadrillion, so for any value beyond the said range we use BigInt



