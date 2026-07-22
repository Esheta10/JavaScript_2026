// // Object.keys(obj)
// // Object.values(obj)

// let obj = {
//     name: "Lamine Yamal",
//     age: 19
// }

// console.log(Object.keys(obj))

// console.log(Object.values(obj))

// // Object.entries(obj) -> returns an array of [key, value] pairs
// console.log(Object.entries(obj))


// let obj = {
//     name: "Lamine Yamal",
//     age: 19
// }


// // we can only use for...in loop in case of Objects
// for(let val in obj){
//     console.log(obj[val])
// } 

// we cannot use array methods like map, filter and reduce with objects

// Object.assign(target, source) --> iska use humlog object ko copy karne ke liye karte hain
let obj = {
    name: "Bianca",
    age: 31,
}

let obj2 = {};
console.log(Object.assign(obj2, obj)) // obj2 mein obj ki properties copy kar do

// waise humlog spread operator ka use karke bhi copy kar sakte the
let obj3 = {...obj}

console.log(obj3)


// Object.freeze(obj) --> object ko freeze kar deta hai, aap fir koi bhi modification like adding , deleting or
// modifying a property jaise operations nahi kar sakte

// let obj = {
//     name: "Bianca",
//     age: 31,
// }

// console.log(Object.freeze(obj))

// obj.name = "Beyonce" // nahi farak parega qki object freeze state mein hai
// obj.age = 43 // nahi farak parega qki object freeze state mein hai

// console.log(obj)


// Object.seal(obj)
let obj = {
    name: "Lionel Messi",
    age: 39
}
Object.seal(obj)

// cannot add/ remove any properties, but modify kar sakte hain
obj.city = "Rosario"
obj.country = "Argentina"

// modification in existing property is allowed
obj.age = 40
console.log(obj)


//  Object.hasOwnProperty(obj) --> returns boolean value
console.log(obj.hasOwnProperty("age"))

