let num = 123.56

console.log(Math.round(num)); // 124

console.log(Math.floor(num)); // 123

console.log(Math.ceil(num)); // 124

console.log(Math.abs(num)); // 123.56

console.log(Math.sqrt(num)); // 11.115754585272203

console.log(Math.pow(num,2)); // 15267.0736

console.log(Math.random()); // 0.559387385962615

console.log(Math.min(123, 56, 20, 797, 9, 468, 864, 90, 358, 1, 797)) // 1

console.log(Math.max(123, 56, 20, 797, 9, 468, 864, 90, 358, 1, 797)) // 864

// Generating random numbers in a given range
let min = 5
let max = 25

console.log(Math.floor(Math.random() * (max - min + 1) + min)) 

// Math.random() -> 0 se le kar (25-5+1) i.e. 21 (exclusive of 21) tak numbers generate karega par humein
//  5 se 25 ke beech ke numbers chahiye isliye + min i.e. 5 kar rahe last mein 

