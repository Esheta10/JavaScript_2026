function Student(name,age){ // Constructor Function
    this.name = name;
    this.age = age;
}


// Method ko prototype par attach kar diya -> Single Memory Space
Student.prototype.introduce = function(){
    console.log(`My name is ${this.name} and I am ${this.age} years old.`)
}

let s1 = new Student("Mona",20);
let s2 = new Student("Lisa", 21);

console.log(s1); // Student { name: 'Mona', age: 20 }
console.log(s2); // Student { name: 'Lisa', age: 21 }

s1.introduce(); //My name is Mona and I am 20 years old.
s2.introduce(); //My name is Lisa and I am 21 years old.


console.log(s1.introduce() === s2.introduce()) // true(points to same memory location)

function BankAccount(holdersName, balance = 0){
    this.holdersName = holdersName;
    this.balance = balance;

    // this.deposit = function(balance){
    //     this.balance += balance;
    // }

    // this.withdraw = function(balance){
    //     this.balance -= balance;
    // }
}

BankAccount.prototype.deposit = function(balance){
    this.balance += balance
    console.log(`Depsited amount: ${this.balance}`)
}

BankAccount.prototype.withdraw = function(balance){
    this.balance -= balance;
    console.log(`Withdrawn amount: ${this.balance}`)
}

let myAccount = new BankAccount("Esheta",1000);
let riyaAccount = new BankAccount("Riya",5000);

myAccount.deposit(600);
console.log(myAccount);
myAccount.withdraw(200);
console.log(myAccount);

console.log("--------------------------------------------")

riyaAccount.deposit(400);
console.log(riyaAccount);
riyaAccount.withdraw(100);
console.log(riyaAccount);


// Class Syntax (es6)

class ClassStudent {
   constructor(name,age){
    this.name = name;
    this.age = age;
   }
   introduce(){
    console.log(`Name is: ${this.name} and age is ${this.age}.`)
   }
}

let s3 = new ClassStudent("Pam", 25);
let s4 = new ClassStudent("Jim",26)

console.log(s3);
console.log(s4);

