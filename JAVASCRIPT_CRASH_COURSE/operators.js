// // date object
// let now = new Date();
// console.log(now);

// // conactenation of strings

// let firstName = "Bob";
// let lastName = "The Builder";

// // method - 1: using template literal
// console.log(` ${firstName} ${lastName}`);

// // also embed expressions
// let price = 100
// let tax = 0.18

// console.log(` Total is ${price + price*tax}`);


// // method-2 : the '+' operator
// let firstName1 = "Shinchan";
// let lastName1 = "Nohara";
// console.log(firstName1 + " " + lastName1);

// // '+' operator with numbers and strings
// // when js encounters a number and a string together, it converts the number to string
// // order matters -> js reads from left to right
// console.log(10+20);
// console.log(10+"20"); //1020
// console.log(10+20+"px"); // 30px here first number appears so they are added then concatenated and converted to string
// console.log("px"+10+20);// px1020  here string appears first, so everything after is treated as string

// // concat() method
// let greet = "Good"
// let time = "Evening"

// console.log(greet.concat(" ", time));

// //join() is used in case of objects and arrays
// const fruits = ["apple", "banana", "orange"];
// console.log(fruits.join("|"));

// let name = "Esheta";
// let reversed = name.split("").reverse().join("")
// console.log(reversed);


// // Subtraction
// let x = "Hello" + 5; //Hello5
// let y = "Hello" - 1; // NaN - not a number

// console.log(x);
// console.log(y); // gives output as NaN

// let z = "10" - 3;
// console.log(z); // 7

// let s1 = 'hi' * 2;
// console.log(s1);

// let num1 = 12.0 /3.5;
// console.log(num1);

// let num7 = 20/0;
// console.log(num7);

// let num2 = (2**3**2); // (2 ** (3 ** 2))
// console.log(num2);

// let a = 2;
// let b = ++a; // pre -increment -> 1st the value increases and then it gets assigned


// console.log(a); // 2
// console.log(b); // 3

// let c = 2;
// let d = --c; // pre - decrement -> 1st the value increases and then it gets assigned


// console.log(c); // 1
// console.log(d); // 1


// let e = 7;
// let f = e++; // post - increment -> 1st the value is assigned and then its incremented


// console.log(e); // 8
// console.log(f); // 7

// // Implicit-type conversion(coercion)
// // String + Number = String
// let res = 55 + "55";
// console.log(res); // 5555

// // Boolean + Number = Number
// // true - 1
// // false - 0
// let b1 = true + 10 ;
// console.log(b1); // 11

// //loose equality
// console.log(55 == "55"); // true
// console.log(0 == false);
// console.log(1 == true);
// console.log("" == false);
// console.log(null == undefined); //Important case

// // Strict Equality
// console.log(5 === "5");
// console.log(1 === true);

// let userName = "";

// if(userName)
//     console.log("Truthy - name exists");
// else 
//     console.log("Falsy - no name");

// // Explicit - type conversion
// // 1. String() method
// let n1 = 1234
// let string1 = String(n1);

// console.log(string1);
// console.log(typeof(string1));

// // 2. Using Empty String
// let n2 = 456
// let string2 = 456 + "";

// console.log(string2);
// console.log(typeof(string2));

// // 3  .toString() method
// let n3 = 890
// let string3 = n3.toString();

// console.log(string3);
// console.log(typeof(string3));

// console.log(String(null));
// console.log(String(undefined));

// // console.log(null.toString());

// //2. String to Number
// //2.1 Number
// let number = "1234";
// console.log(Number(number));

// //2.2 parseInt
// console.log(parseInt("124pixels"));

// //2.2 parseFloat
// console.log(parseFloat("3.14something")
// );

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean({})); // empty arrays
// console.log(Boolean([])); // empty objects

// console.log("4" > "10"); // true -> compares unicode values -> checks character by character
// console.log("5" >= "15"); // true

// Logical OR(||)
console.log( 0 || "" || 2); 

console.log(2 || 1 || 4);

console.log(0 || null || undefined); 


// Logical AND
console.log( 0 && "" && 2); //0

console.log(2 && 1 && 4); // 4

console.log(10 && null && undefined); // null

let name = ""; // falsy
if(!name)// truthy
    console.log("Guess my name");




let score = 0

let display = score || "No score yet"
console.log(display);

//Nullish coalescing ??
let display_nullish = score ?? "No score yet"
console.log(display_nullish);
