// Number -> can hold both integer and floating point numbers

// let num1 = 1;
// let num2 = 1.2;
// let num3 = Infinity;
// let num4 = 'text'/2;

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(typeof(num3));
// console.log(typeof(num4));

// String -> sequence of characters, can be wriiten using double-quotes, single-quotes, back-ticks(template-literal)

let s1 = "double - quotes";
let s2 = 'single - quote';
let s3 = `can embed ${s1}`;

console.log(typeof(s1));
console.log(typeof(s2));
console.log(typeof(s3));

let name = "Alice";
let age = 12;

console.log(`My name is ${name} and I am ${age} years old.`);

console.log("My name is " + name  + " and I am " + age + " years old.");

// Boolean -> true/false;

if(name === "Alice" && age < 18)
    console.log("Cannot vote");
else 
    console.log("Can vote");

// Null -> special value -> that means intentionally empty -> set by developer
let name2 = null;
console.log(name2);

// Undefined -> means variable has been declared but no value is assigned to it -> set by JavaScript automatically
var b;
let a;

const c=10;
console.log(a);
console.log(b);
console.log(c);

// Symbol -> unique value
// even if they have same description, they are completely unique

let s4 = Symbol("Esheta");
let s5 = Symbol("Esheta");

console.log(s4 == s5); // they are never equal

// BigInt -> int can only represent numbers till 2^53 or 9 quadrillion, for handling numbers greater than that BigInt was introduced.
//--> financial apps, cryptography or scientific computing


