console.log("Hello JavaScript!")
// let h1 = document.querySelector("h1")
// h1.innerHTML = "Hello Universe!"

// let p = document.querySelector("p")
// p.innerHTML = "You have to burn like a sun in order to shine like a Sun."

// let a = document.querySelector("h1")
// a.style.backgroundColor = "maroon"

// let b = document.querySelector("p")
// b.style.backgroundColor="green"

let h1 = document.querySelector("h1")
// addEventListener takes 2 parameters ---> event and function
h1.addEventListener("click", ()=>{
    h1.style.backgroundColor = "pink"
    h1.style.color = "black"
})