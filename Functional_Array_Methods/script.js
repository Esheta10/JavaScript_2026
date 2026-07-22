// 1. map() method:
let arr = [1,2,3,5,6,8]

// let newArr = arr.map((elem, index) => {
//     console.log(`Element: ${elem}, Index: ${index}`);
//     return elem*2;

// })

// console.log(newArr);


// 2. forEach() method:

let newArr = arr.forEach((elem, index) => {
    return arr[index] = elem*2;
})

console.log(newArr); // undefined

// Method chaining

const numbers = [12,67,52,40,89];

const doubledAndFiltered = numbers.map((num) => num*2).filter((num) => num > 100)
console.log(doubledAndFiltered);

// 3. filter() method
const array = [1, 2, 4,67, 8, 91, 23, 45];
const filteredArr = array.filter((num) => {
    return num % 2 === 0;
})

console.log(filteredArr);

// 4. reduce() method
let calculate = [23,45,67,89,100,32,15]

let reducedArr = calculate.reduce((acc, curr) => acc+curr, 0);
console.log(reducedArr)

// question-1
const marks = [56, 78, 100, 64, 99];
let sum = 0;
for(let mark of marks){
    sum += mark;
}

const avg = sum / marks.length;

console.log("Average is: ", avg);


// question - 2
// Here, using array constructor I have created an array of size 10 and filled with value 0
const array_constructor = new Array(10).fill(0);
console.log(array_constructor)

// question-3
const arr2 = new Array(10).fill(0)
arr2.forEach((elem, index) => {
    return arr2[index] = index+1;
})
console.log(arr2);


// question-4.1
const mcu_heroes = ["iron-man","captain america","black widow","wanda","hulk","black panther"]
mcu_heroes.push("spider-man")
mcu_heroes.unshift("thor")


//question -4.2
// replacing black widow at 3rd position with hawk-eye
mcu_heroes.splice(3, 1, "hawk-eye")

// question -4.3
console.log(mcu_heroes.includes("captain america"))

console.log(mcu_heroes)


// question-5
// let test = "Esheta";
// console.log(Array.isArray(test)); // isArray() method is used to check if it's an array


let test = "Esheta";
// Array.from() method is used to convert a given datatype into array
console.log(Array.from(test))

let test2 = {};
// If we try to convert an object into array, we get empty array as result
console.log(Array.from(test2))


// question-6
let a = 10
let b = "Esheta"
let c = {
    name: "Lamine Yamal"
}
let d = [1,2,3]
console.log(Array.of(a,b,c,d))

// question-7
let numsArr = [1,2,3,4]
console.log(numsArr.reverse());
let str = "Hello"
console.log(Array.from(str).reverse().join(""));
// for string reversal --> hum pehle usey array mein convert kar rahe then reverse kar rahe then we are 
// joining single characters of the word using join() method

let str2 = "Malayalam"
let reversedStr = str.split(" ").reverse().join("")
if(str == reversedStr){
    console.log("Palindrome string")
} else {
    console.log("Not a palindrome string")
}


let str4 = "hello how are you";
let newStr4 = str4.split(" ").map((elem) => {
    return elem.charAt(0).toUpperCase()+elem.slice(1);
})

console.log(newStr4.join(" "));

