// for...of --> se value milta hai 
// // output - E s h e t a  J a i s w a l
// let str = "Esheta Jaiswal"
// for(let ch of str){
//     console.log(ch);
// }

// // for...in --> se key milta hai
// // output - 0 1 2 3 4 5 6 7 8 9 10 11 12 13 
// for(let ch in str){
//     console.log(ch);
// }

// for(let i=0; i<=100; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }


// let vowelCount = 0;
// let consonantCount = 0;

// const str = "Esheta"
// for(let ch of str){
//     if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O'|| ch == 'U')
//         vowelCount++;
//     else 
//         consonantCount++;
// }

// console.log(vowelCount);
// console.log(consonantCount);


// let sum = 0;
// for (let i=0; i<=20; i++){
//     sum += i;
// }
//  console.log("Sum is: ", sum);

// let sum = 0;
// for(let i=20; i<=30; i++){
//     sum += i;
// }
// console.log(`Sum from 20 to 30 is ${sum}`);


// for(let i=0; i<10; i++){
//     if(i%2 === 1){
//         console.log(i);
//     }
// }


// let computerNumber =  Math.floor(Math.random() * 100) + 1;
// let guess = null
// while(guess !== computerNumber){

//     guess = Number(prompt("Enter a number: "));

//     if(guess < computerNumber){
//         alert("Chosen number is low!")
//     }else if(guess > computerNumber){
//         alert("Chosen number is high!")
//     } else {
//         alert("Your guess is correct!!")
//     }
// }


// let dbPassword = "Esheta@1234"
// let noOfAttempts = 5

// while(noOfAttempts){

//     let password = prompt("Enter a password: ")
//     if(password === dbPassword){
//         alert("You have successfully logged in!")
//         break;
//     } else{
//         alert("Invalid credentials")
//     }
//     noOfAttempts--;
// }

// // when number of attempts become zero
// if (noOfAttempts === 0) {
//     alert("You have exhausted all attempts");
// }


// let num = 10
// let fact  = 1


// for(let i=1; i<=num ; i++){
//     fact *= i;
// }

// console.log("Factorial is: ", fact);



for(let i=1; i<6; i++){

    let str = "";
    for(let j=1; j<=i; j++){
        str = str + " " + j;
    }
    console.log(str);
}

