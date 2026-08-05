// imperative programming

let arr = [1,2,3,4,5]

for(let i=0; i<arr.length; i++){

    arr[i] = arr[i]*2;
}
console.log(arr); //[ 2, 4, 6, 8, 10 ]

// Declarative Programming

let arr2 = [1,2,3,4,5];
let newArray = arr2.map((elem) => {
    return elem*2;
})
console.log(newArray);  //[ 2, 4, 6, 8, 10 ]

// Pure functions -> same input pe same hi output, no side-effects

function add(a,b){
    return a+b;
}
console.log(add(2,4)); // 6


// Impure functions -> modifies external state

let count = 0;
function increment(){
    count++; // modifies external state
}
increment();
increment();
increment();
console.log(count); //3


// Immutability

// Strings are immutable

const str = "Esheta";
console.log(str); // Esheta
str[0] = "A";
console.log(str); // Esheta -> did not change as strings are immutable

// Arrays and Objects are mutable -> can be changed

const array = [1,2,3,4,5];
array[0] = 1000
console.log(array); // [ 1000, 2, 3, 4, 5 ]

const obj = {
    name:"Alice",
    age: 12
}
obj.country = "New Zealand"
console.log(obj);

const list = ["apple","banana","mango"]

function addItem(item){
    let newList = [...list, item];
    return newList;
}

let newList = addItem("watermelon")
console.log(list);  // [ 'apple', 'banana', 'mango' ]
console.log(newList);   // [ 'apple', 'banana', 'mango', 'watermelon' ]

// Ye ek pure function hai qki we are maintaining the state, same input ke liye same hi
// output mil raha and any changes are included in the newList

function removeItem(){

    let removedItem = list.slice(0, list.length-1);
    return removedItem;
}

console.log(list); // [ 'apple', 'banana', 'mango' ]
let modifiedList = removeItem();
console.log(modifiedList); // [ 'apple', 'banana' ]


function capitalizeFirstLetter(str){

    let newStr =  str.charAt(0).toUpperCase() + str.slice(1, str.length);
    return newStr;
}

let capitalizedString = capitalizeFirstLetter("esheta");
console.log(capitalizedString); // Esheta


function createUserName(str){

    return "@"+str.toLowerCase().replaceAll(" ","");
}

let name = "Esheta Jaiswal"
console.log(createUserName(name)); // @eshetajaiswal

// Reuse or Compose Logic

const str2 =  "Alice in BorderLand";
let toLower  = (str2) => str2.toLowerCase();
let removeSpace = (str2) => str2.replaceAll(" ","");
let addAtTheRate  = (str2) => "@"+str2;

let result = addAtTheRate(removeSpace(toLower(str2)));
console.log(result);    //@aliceinborderland

// Don't Iterate
let evens = [];

let arr3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

for(let i=0; i<arr3.length; i++){

    if(arr3[i]%2 === 0)
        evens.push(arr3[i]);
}

console.log(evens); 
/**[
   2,  4,  6,  8,
  10, 12, 14, 16
] */

// Finding out evens using the filter logic

const filteredVals = arr3.filter((num) => {
    return num%2 === 0;
})

console.log(filteredVals);
/**
 * [
   2,  4,  6,  8,
  10, 12, 14, 16
]
 */

// Loose Coupling

let api = "https://www.example.com"

function getUsers(api){
    return `${api}/users`;
}

function getProducts(api){
    return `${api}/products`
}

function getReviews(api){
    return `${api}/reviews`
}

getUsers(api);
getProducts(api);
getReviews(api);

// First-Class Functions

let person = "Esheta Jaiswal"

function greet(){
    return "Hello!";
}

function greetWithName(name){
    return greet() + " " + name;
}

const greeting = greetWithName(person);
console.log(greeting); // Hello! Esheta Jaiswal

// First-Class Functions

function sayHello(){ // Callback function
    return "Hello";
}

function greetings(fn, name){ // Higher - Order function
    return fn + " " + name;
}

let output = greetings(sayHello(), 'Odysseus')
console.log(output); // Hello Odysseus

// Compose and Pipe

let add2 = (num) => num+2;
let multiply5 = (num) => num*5;
let subtract10 = (num) => num-10;

let finalOutput = (subtract10(multiply5(add2(10)))); // here computation is done from right to left (R->L) : Compose 
console.log(finalOutput); // 50

// Now, let's use the concept of loose-coupling for compose

// jab hum function ko spread kar rahe hote using ... => then we call it spread operator
// but jab hum functions ko combine kar rahe hote using ... => then we call it rest operator

// yahan hum ... ko rest operator manenge

// compose: right to left -> use reduceRight
// pipe: left to right -> use reduce

function compose(...fns){

   return function(val){
        return fns.reduceRight((acc,currFn) => {
            return currFn(acc);
        }, val)  
   }
}

let composeResult = compose(add2, multiply5, subtract10)(5)
console.log(composeResult); // -23

function pipe(...fns){
    return function(val){
        return fns.reduce((acc, currFn) => {
            return currFn(acc)
        }, val);
    }
}

const pipeResult = pipe(add2, multiply5, subtract10)(5)
console.log(pipeResult); // 25

