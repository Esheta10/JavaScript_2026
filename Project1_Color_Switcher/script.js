let container = document.querySelector(".container")
let randomBtn = document.querySelector(".randomBtn")
let applyBtn = document.querySelector(".applyBtn")
let colorInput = document.querySelector("#colorInput")
let currentColorValue = document.querySelector(".currentColorValue")
let currentColor = document.querySelector(".currentColor")

console.log(container, randomBtn, applyBtn, colorInput, currentColorValue)

// array of predefined colors
const colorArray = ["red", "blue", "orange", "maroon", "white", "black", "pink", "green", "yellow", "salmon", "magenta"]

// function to pick random color from colorArray
const generateRandomColor = () => {
    let randomColor = Math.floor(Math.random() * colorArray.length);
    return colorArray[randomColor];
}

const changeColor = (color) => {
    container.style.backgroundColor = color; // bg color
    currentColorValue.innerText = color; // span tag ka text
    currentColor.style.backgroundColor = color; // p tag ka color
}

const handleRandomBtnClick = () => {
    let randomColor = generateRandomColor();
    changeColor(randomColor);
}

const handleApplyBtnClick = () => {
    let applyColor = colorInput.value; // input-text mein user dwara likha hua color
    changeColor(applyColor);
}

applyBtn.addEventListener("click", handleApplyBtnClick);
randomBtn.addEventListener("click", handleRandomBtnClick);
