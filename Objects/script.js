let car = {
    name: "Toyota",
    color: "red",
    maxSpeed: "100kmph",
    start: function(){
        console.log("Starting the car...")
    },
    stop: ()=>{
        console.log("Stopping the car...")
    }
}

// console.log(car);
// console.log(car.name);
// console.log(car.maxSpeed);
// car.start();
// car.stop();

// Other ways to write
car["name"];
car["color"];
car["start"]();
car["stop"]();


// Creating object using constructor
let obj = new Object({
    name: "Alice",
    age: "22"
})

console.log(obj.age);


let obj2 = {
    name: "Bob",
    age: 12
}

obj2.name = "Bob The Builder"
obj2.city = "Kolkata"

// delete property
delete obj2["age"]

console.log(obj2)

// this keyword --> won't work with arrow function
let obj3 = {
    name: "Esheta",
    greet: () => {
        console.log(`Hello, ${this.name}`)
    }
}

obj3.greet();

