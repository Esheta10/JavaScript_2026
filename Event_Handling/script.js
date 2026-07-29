// let firstButton = document.querySelector(".firstBtn")

// firstButton.onclick = () => {
//     console.log("I am a property-based event-handling click method.")
// }
// firstButton.onclick = () => {
//     console.log("I will override the first method")
// }

// firstButton.onclick = null; // ab click karne par kuch bhi nahi hoga

// let button = document.querySelector('button')
// function handleClick(){
//     console.log("Button click hua!")
// }
// button.addEventListener('click', handleClick)
// button.removeEventListener('click', handleClick)


let button = document.querySelector(".firstBtn")

button.addEventListener("click", function(event){
    console.log(event)
})

