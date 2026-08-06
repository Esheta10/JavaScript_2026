// JS Object

let obj = {
    name: "Paula", // key par quotes zaruri nahi hai
    age: 52,
    sayHello: function(){ // functions allowed hai
        console.log("Hello!")
    }
}

// DOT-METHOD:


console.log(obj.name); // Paula
console.log(obj.age); // 52

// BRACKET-METHOD:

console.log(obj["name"]); // Paula
console.log(obj["age"]); // 52


obj.sayHello(); // Hello!


// JS object

const user = {
    name: "Esheta",
    login: () => {
        return true;
    }
}

// converting to JSON from JS Object
const jsonString = JSON.stringify(user);
console.log(jsonString); // {"name":"Esheta"}

// Converting back to JS Object from JSON 
const parseString = JSON.parse(jsonString);
console.log(parseString); // { name: 'Esheta' }
 
