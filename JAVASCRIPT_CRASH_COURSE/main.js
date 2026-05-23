// log a statement using console.log()
console.log("Hello from main.js")

// Variables
// 1. var -> function-scoped
//        -> can be re-declared and updated
//        -> hoisted to the top of its scope(initialized as undefined)
var age = 25;
var age = 27;
console.log(age) // 27

//2. let -> block-scoped {}
//       -> can be updated but not re-declared in the same scope
//       -> Hoisted but not initialized(accessing before declaration throws reference error)
let name = "Bob"
name = "Alice"
console.log(name) // Alice

//3. const -> block-scoped {}
//         -> cannot be updated or re-declared
//         -> must be initialized at declaration
//         -> Objects / arrays declared with const can still have their contents mutated
const PI = 3.14
console.log(PI); //3.14

const user = {
    name: "Alice"
}
user.name = "Bob"
console.log(user.name) // Bob

