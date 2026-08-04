/**32. How would you handle form validation in real time and show error messages
dynamically? */

let nameInput = document.querySelector("#name")
let emailInput = document.querySelector("#email")
let passwordInput = document.querySelector("#password")

let nameError = document.querySelector(".nameError")
let emailError = document.querySelector(".emailError")
let passwordError = document.querySelector(".passwordError")

let nameVal = document.querySelector(".nameVal")
let emailVal = document.querySelector(".emailVal")
let passwordVal = document.querySelector(".passwordVal")

nameInput.addEventListener("input", (event) => {
    
    let name = event.target.value;
    if(name.length < 3){
        nameError.innerText = "Name must be atleast 3 characters long"
    }else{
        nameError.innerText = " "
    }
    nameVal.innerText = event.target.value;
})

emailInput.addEventListener("input", (event) => {

    let email = event.target.value;
    if(!email.includes("@") || !email.includes("."))
        emailError.innerText = "Please enter a valid e-mail address"
    else
        emailError.innerText = " "
    emailVal.innerText = event.target.value; 
})
passwordInput.addEventListener("input", (event) => {

    let password = event.target.value
    if(password.length < 6)
        passwordError.innerText = "Password must be at least 6 characters long"
    else
        passwordError.innerText = " "
    passwordVal.innerText = event.target.value;
})