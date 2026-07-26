// const person = {
//     name: "Emiliano Martinez",
//     age: 43,
//     role: "Goal-Keeper"
// }

// const {name, age, role} = person;

// console.log(name);
// console.log(age);
// console.log(role);


// const vegetables = ["carrot", "raddish", "beetroot", "spinach"]

// const [item1, item2, item3, item4] = vegetables;

// console.log(item1);
// console.log(item2);
// console.log(item3);
// console.log(item4);

// question-1
// let obj = {
//     name: "Iliana",
//     age: 21,
//     city: "Madrid"
// }

// for(let key in obj){
//     console.log(`Value of ${key} is ${obj[key]}`)
// }

// obj.email = "abc@gmail.com"
// console.log(obj)

// delete(obj.city)
// console.log(obj)

// question-2
let obj = {
    firstName : "Erling",
    middleName : "Braut",
    lastName : "Haaland"
}

let convertToFullName = (param) => {
    return `${param.firstName} ${param.middleName} ${param.lastName}`
}

let fullName = convertToFullName(obj)
console.log(fullName)

// question-3
let obj2 = {
    name: "Neymar",
    age: 32,
    profession: "Football Player"
}

const properties_length = Object.entries(obj2).length
console.log(properties_length)

// question-4
const users = [
    {name: "Alice", role: "admin"},
    {name: "Bob", role: "user"},
    {name: "Charlie" , role: "admin"}
]

const filteredUsers = users.filter((user) => {
    return user.role === "admin"
}).map((item) => {
    return item.name;
})

console.log(filteredUsers)


// question-5
const products = [
    {id: 1, name: "Iphone 14"},
    {id: 2 , name: "Samsung Galaxy"},
    {id: 3, name: "Google Pixel"}
]

const filteredProducts = products.map((product) => {
    console.log(product.name);
})

console.log(filteredProducts)