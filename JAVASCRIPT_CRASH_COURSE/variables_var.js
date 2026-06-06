// var, let and const

// var -> previously used
// after 2015, it became obsolete and its not prefereed

// var -> function- scoped
//-> re-declared and updated 

// {
//     // block - scope -> compound statements
// }

// function(){
//     // function - scope
// }

// var name = "Esheta";
// name = "Arunima";
// var name = "Parth";
// name = "Saurav";
// console.log(name);

// // var allows you to print/log the variables outside block-scope, which is not considered an ideal practice hence we avoid using it
// {
//     var num = 10;
//     console.log(num);
// }
// console.log(num);

// var num1 = 10;
// var num2 = 20;
// function addNumbers(num1, num2){
//     return num+num2;
// }

// console.log(num1+num2);

// console.log(addNumbers(10, 20));

// Hoisting -> if we try to access the variable before declaring them using "var" variable, it gives us the value of undefined.

// console.log(name);  // undefined

// var name = "Alice";

// console.log(name);

var education; // undefined
console.log(education);
