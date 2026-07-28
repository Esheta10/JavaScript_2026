// let div = document.querySelector(".div")

// // Using style
// div.style.backgroundColor = "red"
// div.style.fontSize = "60px"

// // Using attribute method
// div.setAttribute('style','background-color: salmon; color: blue; font-size: 100px; border: 2px solid black')

// // Using cssText property
// div.style.cssText = "background-color: maroon; color: bisque; font-style: italic; font-size: 50px; padding-left: 450px;"

// // Using className property
// console.log(div.className);

// // Using clasList property : add(), remove(), toggle(), contains()
// div.classList.add("maroon-bg")
// div.classList.add("bisque-text-color")
// div.classList.remove("maroon-bg")
// console.log(div.classList.contains("bisque-text-color"))



// // question-2
// let div = document.querySelector(".div")
// let button = document.querySelector("button")

// button.addEventListener('click', () => {

//     if(document.body.className === "light"){
//        document.body.className = "dark";
//     } else {
//         document.body.className = "light"
//     }
// })

// question-3
let div = document.querySelector(".div")
let button = document.querySelector("button")

button.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
})