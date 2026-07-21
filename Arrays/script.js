let arr1 = [1,2,3,4,5,6]
let arr2 = ["orange", "red","blue","green","yellow"]
let arr3 = [1,2,["monday", "tuesday"], 8.9, true]

console.log(arr1);
console.log(arr2);
console.log(arr3);


// Array Constructor
let arr = new Array(1,2,3,4,5,6);
console.log(arr);


let constructor_array = new Array(20).fill(0); // create an empty array of size 20 having value as 0 
console.log(constructor_array);


let nums = [1,2,3,4,5,6,7,8]
// push --> inserting elements into the array from rear
nums.push(9)
nums.push(10)
nums.push(11)
nums.push(12)
console.log(nums)

// pop --> removing elements from array from rear position
nums.pop()
console.log(nums)

// unshift --> inserts elements into the array from starting poaition
nums.unshift(71)
nums.unshift(72)
console.log(nums)

// shift --> removes elements from array from starting position
nums.shift()
console.log(nums)


// slice --> slice method does not change the original array, it performs the operation and returns a new array 
let old_array = [10,20,30,40,50]
let new_array = old_array.slice(1, 4);

console.log(old_array)
console.log(new_array)

// splice() method --> [ startIndex, no. of items to delete, any elements to add(if any)]
// ek baar mein multiple kaam karta hai, both add and delete

let fruits = ["apple","mango","orange","banana","guava","grapes"]

let removed_fruits = fruits.splice(1,3);;

console.log(fruits)
console.log(removed_fruits);


// concat() method --> concats the 2 array and returns a new array, it does not modify the original array
let array1 = [10,20,30,40,50]
let array2 = [100,200,300]

let modified_array = array1.concat(array2);
console.log(modified_array);


// spread operator 
nums1 = [1,2,3,4]
nums2 = [10,20,30,40]
nums3 = [100,200,300,400]

const new_nums = [...nums1, ...nums2, ...nums3];

console.log(new_nums)


// Join() method
let vehicles = ["truck", "bus", "auto"]
let joined_vehicles = vehicles.join("@")
console.log(joined_vehicles)

// toString() method
let newVehicles = vehicles.toString()
console.log(newVehicles)

// includes() method
console.log(vehicles.includes("truck"))

// indexOf method
console.log(vehicles.indexOf("bus"))

// reverse() method
console.log(vehicles.reverse())

const names = ["Fred","Bob", "Charlie", "Derek","Alice"]
console.log(names.sort())

// find() method
let test = vehicles.find((item) => {
    return item === "bus";
})

console.log(test);

// flat method() --> used to flatten nested arrays to single array or upto user's choice by specifying the limit
const characters = ["Iron Man", "Hulk", ["Captain America"],["Black Widow", ["Hawkeye", "Black Panther"]]]
console.log(characters.flat(2));


