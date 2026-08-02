// let num1 = Number(1234.5)
// console.log(num1);  //1234.5
// console.log(typeof(num1)); //number

// let num2 = Number("7537.45") 
// console.log(num2); //7537.45
// console.log(typeof(num2)) //number


// let const_num1 = new Number(1234);
// console.log(const_num1); //[Number: 1234]
// console.log(typeof(const_num1)); //object

// let const_num2 = new Number("648.12")
// console.log(const_num2); //[Number: 648.12]
// console.log(typeof(const_num2)); //object


console.log(Number.MAX_VALUE); //1.7976931348623157e+308

console.log(Number.MIN_VALUE); //5e-324

console.log(Number.POSITIVE_INFINITY); //Infinity

console.log(Number.NEGATIVE_INFINITY); //-Infinity

console.log(Number.NaN); //NaN

console.log(Number.EPSILON); //2.220446049250313e-16

console.log(Number.isNaN()) //false


let num1 = "123.856"

console.log(parseInt(num1));    //123
console.log(parseFloat(num1));  //123.856


let num2 = "7834.21px"

console.log(parseInt(num2));    //7834
console.log(parseFloat(num2));  //7834.21


console.log(isNaN(num2)); // true
console.log(isFinite(num2)); // false

let num3 = 134689.4568902

// .toFixed(n) -> ye fix karta hai ki decimal ke baad kitne digits aayenge
console.log(num3.toFixed(4));  //134689.4569

// .toExponential(n)
console.log(num3.toExponential(5)); //1.34689e+5

// .toPrecision(n)
console.log(num3.toPrecision(6)); //134689

// .toString()
let num4 = num3.toString(); // converts number to string
console.log(typeof(num4)); // string

//.valueOf() 
console.log(num3.valueOf()) //134689.4568902



