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

    this.deposit = function(balance){
        this.balance += balance;
    }

    this.withdraw = function(balance){
        this.balance -= balance;
    }
}

let myAccount = new BankAccount("Esheta",1000);
myAccount.deposit(500);
console.log(myAccount);
myAccount.withdraw(100);
console.log(myAccount);