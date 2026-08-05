
// Object Literal
let Student = {
    name: "Alice",
    age: 21,
    passion: "Reading", // property
    introduce : function() { // method
        console.log(`My name is ${this.name}, my age is ${this.age} and I have a passion for ${this.passion}`);
    }
}

Student.introduce(); //My name is Alice, my age is 21 and I have a passion for Reading



// Constructor Function
function constStudent(name, age, passion){
    this.name = name;
    this.age = age;
    this.passion = passion;

    return this;
}


let s1 = new constStudent("Alyssa",42,"Painting");
let s2 = new constStudent("Riley",32, "Athletics");

console.log(s1);
console.log(s2);

// Factory function
function factoryStudent(name,age, passion){
    return {
        name,
        age,
        passion,
        greet(){
            console.log(`Hello, I'm ${name}`)
        }
    };
}


const s3 = factoryStudent("Romulus", 19, "fighting");
const s4 = factoryStudent("Remus", 21,"serendipity");

console.log(s3);
console.log(s4);
s3.greet();
s4.greet();

// Class Syntax(es6)

class ClassStudent{

    constructor(name, age, passion){
        this.name = name;
        this.age = age;
        this.passion = passion;
    }
}

let s5 = new ClassStudent("Achilles",25,"Fighting in Trojan War");
let s6 = new ClassStudent("Patrocles",19,"I got killed when I disguised myself as Achilles and went to fight Hector")

console.log(s5);
console.log(s6);

