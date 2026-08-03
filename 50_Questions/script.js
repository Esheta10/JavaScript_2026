//  1. Create a function that returns the last element of an array.
const arr = [12,34,56,78,90]
console.log(arr[arr.length-1]); // 90

// 2. Find the combination of two arrays.
const arr1 = [1,2,3];
const arr2 = [4,5,6];
// Method-1: using spread operator
const res = [...arr1, ...arr2];
console.log(res); // [ 1, 2, 3, 4, 5, 6 ]
// Method-2
const combinationArr = arr1.concat(arr2);
console.log(combinationArr);  // [ 1, 2, 3, 4, 5, 6 ]


// 3. Generate a random integer between 0 to 18.
// formula : Math.random() * (max-min+1) + min
console.log(Math.floor(Math.random() * 19))

// 4. Create a function that takes an array containing both numbers and strings, and returns a
// new array containing only the string values.

const array = [10,20, 30, "hello", "bye"];

let stringArray = array.filter((elem) => {

    if(typeof elem === "string")
            return true;
})
console.log(stringArray);

// 5. Find the maximum number in an array.
const nums = [45,76,10,123,456,908];

console.log(Math.max(...nums)) // 908

// 6. Write a function that returns the length of a given object (number of keys).

const obj = {
    name: "Odysseus",
    kingdom: "Ithaca",
    skills: ["Led the victory of Trojan War", "Survived 10 years in sea"]
}

console.log(Object.keys(obj).length); // 3

// 7. In an array of objects filter out those objects which have gender's value male.
const names = [
    {
        name: "Odysseus",
        gender: "Male"
    },
    {
        name: "Penelope",
        gender: "Female"
    },
    {
        name: "Telemachus",
        gender: "Male"
    },
    {
        name: "Eurylochus",
        gender: "Male"
    }
]

const filterMales = names.filter(obj => {
    if(obj.gender === "Male")
        return true;
})

console.log(filterMales);

//8. Given an array of strings, return a new array where all strings are in uppercase.

const days = ["monday", "tuesday", "wednesday", "thursday", "friday"];

const resultArray = days.map((elem) => {

    return elem.toUpperCase();
})
console.log(resultArray); // [ 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY' ]

// 9. Check if an object is empty (has no keys).

const obj1 = {};
const obj2 = {
    name: "Esheta",
    skills: ["JavaScript", "C++", "DSA"]
};

console.log(Object.keys(obj1).length === 0); // true
console.log(Object.keys(obj2).length === 0); // false

// 10. Create an array of numbers and double each value using .map().

const values = [10,20,30,40,50,60,70,80,90,100];

const doubleValues = values.map((elem) => {
    return elem*2;
})

console.log(doubleValues); 
// [
//    20,  40,  60,  80,
//   100, 120, 140, 160,
//   180, 200
// ]



// 11. Convert an array of strings into a single comma-separated string.

let data = [1, "fruits", "pastries", 4, 7, 10, 45]
console.log(data.join()); // 1,fruits,pastries,4,7,10,45

// 12. Write a function to flatten a nested array (one level deep).(e.g., [1, [2, 3], 4] → [1, 2, 3, 4])

// flat mathod() -> used to flatten nested arrays to single array or upto user's choic by specifying the limit

const numsArray = [1, [2, 3], 4];
console.log(numsArray.flat()) // [ 1, 2, 3, 4 ]

// 13. Write a function that checks if all elements in an array are numbers.

const mixedValues = [1,2,3,4, "morning", 5,6 ,"day", "night","dawn","twilight"];

// Method-1
const filteredNums = mixedValues.filter((elem) => {

    if(typeof elem === "number")
        return true;
})

console.log(filteredNums); // [ 1, 2, 3, 4, 5, 6 ]

// Method-2
// every() method ye check karta hai ki kya array ka har ek element condition satisfy karta hai, in this case kya har ek element
// Number hai ?
const filteredNumsUsingEvery = mixedValues.every((elem) => {
    
    if(typeof elem !== "Number")
            return false;
})

console.log(filteredNumsUsingEvery); // false

// 14. Build a simple isPrime() function to check if a number is prime.

const nums_data = [1,2,4,13,39,51,67,83];

const check_prime = nums_data.filter((num) => {

    if(num <= 1)
        return false;

    for(let i=2; i <= Math.sqrt(num); i++ ){
        if(num %i === 0)
            return false;
    }
    return true;
})
console.log(check_prime); // [ 2, 13, 67, 83 ]

// 15. Create a function that removes duplicate values from an array.

const numbers = [1,1,2,3,4,4,5,5,6,6,7,7,8]

// Method-1
function removeDuplicates(numbers){
    // return [...new Set(numbers)];
    let set = new Set(numbers);
    return [...set];    // set ko array mein convert kar rahe
}
console.log(removeDuplicates(numbers));

// Method-2
let resultantArray = numbers.filter((elem, index) => {

    if(numbers.indexOf(elem) === index)
            return true;
    
    return false;
})
console.log(resultantArray);
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]


// 16. What’s the difference between parseInt and Number()?

console.log(parseInt("123.45"));    // 123
console.log(Number("123.45"));  //123.45

console.log(parseInt("67.45px"));   //67
console.log(Number("68.75px"));     // NaN

console.log(parseInt(""));  //NaN
console.log(Number(""));    //0

console.log(parseInt(true)); //NaN
console.log(Number(true)); //1


//17. Why does 0.1 + 0.2 !== 0.3 in JavaScript?

console.log(0.1+0.2 === 0.3);   // false
console.log(0.1+0.2);   // 0.30000000000000004 --> 0.1 + 0.2 !== 0.3 due to floating-point precision issue


//18. Explain floating-point precision issues in JavaScript.

// Humlog numbers base-10 mein sochte hain, lekin computer base-2 mein kaam karta hai, jaise 0.1 and 0.2 humesha exact store nahi hota
// balki thoda sa round-off ho jaata hai, isi wajah se 0.1+0.2 === 0.3 ka result false aata hai
// jaise 1/3 ko decimal mein likhein toh woh endless 0.333333 banta hai, waise hi binary mein 0.1 and 0.2 endless repeating fractions 
// ban jaate hain aur inka sum kuch aisa hota hai 0.30000000000000004

// Solution-1: using .toFixed()
let sum = Number((0.1+0.2).toFixed(2)); // "0.30" string deta hai isliye Number use karke, number mein convert karo
console.log(sum === 0.3) // true

// Soultion-2: using Number.EPSILON
// JS mein 2 numbers ko directly compare mat karo using === bas check karo ki kya unka difference tolerable hai
console.log((0.1+0.2)-0.3 < Number.EPSILON); //true

//19. How would you handle high-precision decimal math in JS?

// Using decimal.js: Ye library arbitrary-precision decimal numbers manage karti hain aur rounding errors ko avoid karti hain
const Decimal = require("decimal.js")
let num1 = Decimal(0.1)
let num2 = Decimal(0.2)

let summation = num1.plus(num2)
console.log(typeof(summation)) // object
console.log(Number(summation) === 0.3) // true

//20. What is the difference between slice and splice?

let name = "Telemachus"
// name.slice(startIndex, endIndex-1)
let sliced_name = name.slice(4,10)
console.log(name) // Telemachus -> original name fo modify nahi karta -> Immutable
console.log(sliced_name) // machus

// splice() method sirf arrays pe kaam karta hai -> pehle string ko arry mein convert karo
// splice() method -> [startIndex, kitne elements delete karne hain, any elements to add]
let nameArray = Array.from(name);
let spliced_name = nameArray.splice(4, 6, "gonus")
console.log(nameArray) // [ 'T', 'e', 'l', 'e', 'gonus' ] --> original array ko modify karta hai -> mutable
console.log(spliced_name) // [ 'm', 'a', 'c', 'h', 'u', 's' ]
console.log(nameArray.join("")) // Telegonus

/**
 * 1st difference: slice aapka string aur array dono ke saath kaam karta hai, lekin splice sirf aur sirf array ke saath kaam karta hai
 * 2nd difference: slice aapka string, original array mein koi change nahi karta(IMMUTABLE) lekin splice aapka original array mein change kar 
 * deta hai(MUTABLE)
 * 3rd difference: slice aapka sirf tukda kaat kar de raha hota hai (startIndex, endIndex-1), lekin splice tukdat kaat kar bhi 
 * deta hai aur saath mein add bhi kar sakta hai (startIndex, number of elements to delete, add elements/strings)
 */

// 21. Create a function that reverse each word of a given sentence. E.g., Mai hun manas → sanam nuh iaM

const sentence = "Mai hun manas"
console.log(sentence.split(" ")) // [ 'Mai', 'hun', 'manas' ] //  string -> array mein convert hota hai .split() method se
console.log(sentence.split(" ").reverse()) // [ 'manas', 'hun', 'Mai' ]

let reversedSentence = sentence.split(" ").reverse().map((word) => {

   let reversedWord =  word.split("").reverse().join("")
   return reversedWord;
}).join(" ")

console.log(reversedSentence) // sanam nuh iaM

/**
 * sentence = "Mai hun manas"
 * sentence.split() = [ 'Mai', 'hun', 'manas' ] // array mein convert hua
 * sentence.split().reverse() = [ 'manas', 'hun', 'Mai' ]
 * word = "manas" word.split("") =>  ['m', 'a', 'n', 'a', 's']  => word.split("").reverse().join("") => sanam
 * word = "hun"  word.split("") => ['h', 'u', 'n'] => word.split("").reverse().join("") => nuh
 * word = "Mai" word.split("") => ['M', 'a', 'i'] => word.split("").reverse().join("") => iaM
 * reversedWord.join(" ") => // sanam nuh iaM
 * 
 */

//22. In an array of numbers and strings, only add those numbers which are not strings.

const combinationArray = ["apple",10,"orange",20,30,40,"guava","litchi","plum",50]
let addVal = 0;
const summationArray = combinationArray.map((item) => {

    if(typeof item === "number"){
        addVal += item;
    }
    return addVal;
})

console.log("Sum is: ", addVal); //Sum is:  150

//23. How would you check if a number is an integer?

let number1 = 121
let number2 = 121.7356239

// Method-1
console.log(Number.isInteger(number1)) // true
console.log(Number.isInteger(number2)) // false

// METHOD-2
console.log(number1 % 1 === 0); // true
console.log(number2 % 1 === 0); // false
// agar number 1 se pura pura divisible hai toh integer hoga, otherwise float

// 24. Write a JavaScript function that reverse a number.

function reverseNumber(num){

    return Number(num.toString().split("").reverse().join(""));
}

let reverse = reverseNumber(123);
console.log(reverse); // 321

// 25. Write a javascript function that returns a passed string with letters in alphabetical order.

let fruit = "pomegranate"
console.log(fruit.split("").sort().join("")) //aaeegmnoprt

/**26. Write a Javascript function that accepts a string as a parameter and conversts the first
letter of each word of the string in upper case. */

let sentence2 = "its raining very heavily today"

function capitalizeSentence(sentence){

    let upperCaseWord = sentence.split(" ").map((word) => { // ['its', 'raining', 'very', 'heavily', 'today']

        let firstLetter = word.charAt(0).toUpperCase(); // pehla letter upper-case karo

        let restOfTheWord = word.slice(1); // baaki ke letters extract karo

        return firstLetter.concat(restOfTheWord); // fir dono ko combine kar do
    })
    return upperCaseWord.join(" "); // array ko wapis space se join karke string banao
}   

console.log(capitalizeSentence(sentence2)); //Its Raining Very Heavily Today


/**27. Write a javascript function to get the first element of an array. Passing a parameter 'n' will
return the first 'n' elements of the array. */


function getFirstElement(arr, n){

    if(n==0){
        return arr[0]; // agar kuch bhi mentioned nahi hai toh sirf 1st element return karo
    }else if(n >  arr.length) {
        console.log("ERROR: n ki value array ke size se badi hai")
    }else{
        return arr.slice(0, n); // slice method ka use karenge to get elements until n
    }

}

let answer = getFirstElement([1,2,3,4,5,6,7],4); // getFirstElement(arr, size)
console.log(answer);    // [ 1, 2, 3, 4 ]


// slice method() works from (startIndex, endIndex-1) aur array ki indexing waise bhi 0 se hoti hai isliye hum arr.slice(0,n) kar rahe 
// instead of n+1


/**28. Write a javascript function to get the number of occurrences of each letter in specified
string. */

function letterOccurences(word){

    let freq = {};

    for(let ch of word){

        freq[ch] = (freq[ch] || 0) + 1; 
    }
    return freq;
}   

const findOccurence = letterOccurences("apple");
console.log(findOccurence); //{ a: 1, p: 2, l: 1, e: 1 }

/** agar koi value pehli baar aati hai toh uski value undefined/falsy hoti hai isliye hum  || or operator ka use karte hain  
 * ki agar value undefined hai toh uss case mein 0 consider karo and then add 1 to it , to consider its frequency
*/


//29. write a javascript program to find the most frequent item of an array.

function frequentItem(arr){

    let freq = {};
    let max_count = 0;
    let mostFrequentItem = null;

    // sabhi elements ki frequency count karo
    for(let item of arr){

        freq[item] = (freq[item] || 0) + 1;
       
        if(freq[item] > max_count){
            max_count = freq[item];
            mostFrequentItem = item;
        }
    }
    console.log(freq);// { books: 3, pen: 3, eraser: 1, pencil: 1 }
    // un sabhi elements ko collect karo jinki frequency maximum frequency ke barabar hai
    let result = [];
    for(let key in freq){
        if(freq[key] === max_count){
            result.push(key);
        }
    }
    return result;
}

const mostFrequent = frequentItem(["books", "pen", "pen", "books", "books","eraser","pencil", "pen"])
console.log(mostFrequent); // [ 'books', 'pen' ]


//30. write a javascript program to shuffle an array.

let given_array = [1,2,3,4,5]

for(let key in given_array){

    let random_index = Math.floor(Math.random() * given_array.length);

    // let temp = given_array[random_index];
    // given_array[random_index] = given_array[key];
    // given_array[key] = temp;

    [given_array[key] , given_array[random_index]] = [given_array[random_index], given_array[key]]
}

console.log(given_array); //[ 2, 3, 5, 4, 1 ]

// used the concept of array destructuring for swapping the values



