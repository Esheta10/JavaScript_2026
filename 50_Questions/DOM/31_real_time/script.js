/**31. How can you update the DOM based on user input in real-time (e.g., live preview of a
form)? */

let nameInput = document.querySelector("#name")
let emailInput = document.querySelector("#email")

let livePreview = document.querySelector(".livePreview")
let nameVal = document.querySelector(".nameVal")
let emailVal = document.querySelector(".emailVal")

nameInput.addEventListener("input", (event) => {
    nameVal.innerText = event.target.value;
})

emailInput.addEventListener("input", (event) => {
    emailVal.innerText = event.target.value;
})