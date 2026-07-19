// question-2

// let a=10, b=20, c=5;

// let result = (a<b) ? (a<c ? a : c) : (b<c ? b : c);
// console.log(result);  




// question-3

// let role="viewer"

// switch(role){

//     case "admin" : console.log("Full access");
//                    break;
//     case "editor" : console.log("Edit access");
//                     break;
//     case "viewer" : console.log("Read-only");
//                     break;
//     default: console.log("No access");
// }



// question-4

// let num=15;

// if(num % 3 == 0 && num % 5 == 0)
//     console.log("FizzBuzz")
// else if(num % 3 == 0)
//     console.log("Fizz")
// else if(num % 5 == 0)
//     console.log("Buzz")
// else 
//     console.log("Invalid number")



// question-5

// let a = 100
// let b = 5

// let operator = "/"

// switch(operator){

//     case "+" :  console.log(a+b)
//                 break;
//     case "-" : console.log(a-b)
//                break;
//     case "*" : console.log(a*b)
//                break;
//     case "/" : console.log(a/b);
//                break;
//     default: "Invalid operation"
// }



// question-6


let balance = 5000
let amount = 100000

let choice= "withdraw"

switch(choice){

    case "check balance": console.log(balance)
                          break;
    case "deposit":{ 
                        console.log("Enter amount to be deposited: ", amount);
                        if(amount <= 1)
                                console.log("Invalid amount")
                        else{
                            balance = balance + amount;
                            console.log("Your new balance is: ",balance)
                        }
                        break;
                    }
    case "withdraw": {
                        if(amount > balance || amount <= 1)
                            console.log("Invalid operation")
                        else {
                            balance = balance - amount
                            console.log("Your current balance is: ", balance)
                        }
                    }
    default: "Invalid operation"
}