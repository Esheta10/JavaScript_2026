let openModalButton = document.querySelector(".openModalBtn");
let closeModalButton = document.querySelector(".closeModalBtn")
let modalContainer = document.querySelector(".modalContainer")


openModalButton.addEventListener("click",()=>{
    modalContainer.style.display = "flex";
})

// close button pe click karne se bhi modal close hoga
closeModalButton.addEventListener("click", ()=>{
    modalContainer.style.display = "none";
})


// parent container i.e. modal container par bhi click karne se modal content 
// close hoga, yahan par hum even delegation ka logic use kar rahe
modalContainer.addEventListener("click", (event) => {
    if(event.target.className === "modalContainer"){
        modalContainer.style.display = "none";
    }
})


