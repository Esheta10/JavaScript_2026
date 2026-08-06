// class Car{
//     constructor(name, color, mileage){
//         this.name = name;
//         this.color = color;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log(`${this.name} is starting...`)
//     }
//     stop(){
//         console.log(`${this.name} is stopping...`)
//     }
// }

// let toyota = new Car("Toyota", "Silver", 28)
// let buggati = new Car("Buggati", "Brown", 5)
// let bmw = new Car("BMW","Dark Blue", 45)

// console.log(toyota);
// console.log(buggati);
// console.log(bmw);

// toyota.start();
// toyota.stop();

// buggati.start();
// buggati.stop();

// bmw.start();
// bmw.stop();

// class Car2{

//     #fuel = 100;

//     #burnFuel(){
//         this.#fuel -=1;
//     }

//     start(){
//         this.#burnFuel();
//         console.log("Car is starting...")
//     }
// }

// let c1 = new Car2();
// c1.start();
// console.log(c1);


class BankAccount2{

    #balance = 1000

    constructor(holdersName, balance = 1000){
        this.holdersName = holdersName;
        this.#balance = balance;
    }

    deposit(amount){
        this.#balance += amount;
    }

    set setBalance(newBalance){
        if(isNaN(newBalance)){
            console.error("Invalid Balance");
            return;
        }
        this.#balance = newBalance;
        console.log("Balance set successfully");
    }

    get getBalance(){
        return this.#balance;
    }
}

let userAccount = new BankAccount2("Esheta", 1000)
console.log(userAccount);

userAccount.deposit(200);
console.log(userAccount.getBalance);


userAccount.setBalance = 50;
console.log(userAccount.getBalance);


