const listContainer = document.querySelector(".listContainer")

listContainer.addEventListener("click", (event) => {
    if(event.target.className === "listItem"){
        event.target.style.textDecoration = "line-through";
    }
})

// list-item ko strike-through kar do agar wo waale div ki class event.target ho


