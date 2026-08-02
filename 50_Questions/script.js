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





