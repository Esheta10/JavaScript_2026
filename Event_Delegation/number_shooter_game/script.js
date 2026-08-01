let numberContainer = document.querySelector(".numberContainer")
let timerValue = document.querySelector(".timerValue")
let targetValue = document.querySelector(".targetValue")
let scoreValue = document.querySelector(".scoreValue")

let numberOfCircles = 30;
let target; // target number generate karna
let timer = 10; // 10 seconds ka timer rahega per game

// base set-up and 30 circles screen par dikhane ka logic
function generateNumbers(){

    // pehle se present contents ko clear karna
    numberContainer.innerHTML = "";

    for(let i=1; i<=numberOfCircles; i++){

        let divElem = document.createElement("div")
        divElem.className = "circle"

        let number = Math.ceil(Math.random() * 10)
        divElem.innerText = number;

        numberContainer.append(divElem);
    }
}

// --------------------------------------------------------------------

// Player ko kis number pe click karna hai, uske liye generateTarget ka function
function generateTarget(){

    target = Math.ceil(Math.random()*10); // 1 se 10 ke beech naya random target
    targetValue.innerText = target; // target ko UI mein update karna
}

//-------------------------------------------------------------------------

// clicking the circle and score updation logic
// circle dabate hi check karna ki sahi circle dabaya gaya hai ki nahi and then
// score update karne

numberContainer.addEventListener("click", (event)=>{

    if(event.target.className === "circle"){
            let clickedNumber = Number(event.target.innerText);

            if(clickedNumber === target){ // agar clickedNumber target ke barabar hai

            let score = Number(scoreValue.innerText);
            score += 10 // increment the score by 10
            scoreValue.innerText = score; // assigning the score back to scoreValue div
        }
    }
    generateTarget(); // generate next new target
})

//-----------------------------------------------------------------------------------

// Timer system build karna - start timer and reset timer

function timerReset(){

    timer = 10; // timer variable ki value 10 set ki
    timerValue.innerText = timer; // screen (UI) pe 10 display kar diya
}

function startTimer(){

    setInterval(()=>{

        if(timer <= 0){
            // timer khatam hone par screen pe game over show karna
            numberContainer.innerHTML = `
                <div>
                    <h1 class="game-over">Game Over</h1>
                    <button class="game-overBtn" onclick="restartGame()">Restart Game</button>
                </div>
            `
            return;
        }
        timer--;
        timerValue.innerText = timer;

    }, 1000)
}

//----------------------------------------------------------------------------------------

// Game over hone ke baad, new Game ke liye restart button par click karte hi
// timer start hoga, circles create honge, target generate hoga and score uodate
function restartGame(){

    timerReset(); // timer ko 10s pe reset karne ke liye
    generateTarget(); //naya target number regenerate karenge
    generateNumbers(); // screen par circles regenerate karenge
    scoreValue.innerText = 0;
}

// Global execution -> page load hote hi start karna

restartGame();
startTimer();