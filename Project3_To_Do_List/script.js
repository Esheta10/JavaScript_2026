let listContainer = document.querySelector(".listContainer");
let addInput = document.querySelector("#addInput")
let addBtn = document.querySelector(".addBtn")

// refresh par localStorage se data load karein, agar na mile
// toh empty array [] return karein
let list = JSON.parse(localStorage.getItem("todoList")) || [];

function renderList(arr){

    // clear previous items if re-rendering 
    listContainer.innerHTML = ``;
    
    arr.forEach((item) => {

    const { id, text} = item;
    let divElem = document.createElement("div");
    divElem.className = "list";
    divElem.innerHTML = `
             <p>${text}</p>
    `
    let buttonElem = document.createElement("button");
    buttonElem.className = "deleteBtn"
    buttonElem.innerText= "❌";

    buttonElem.onclick = () => {
        handleRemoveList(id);
    }

    divElem.append(buttonElem); // append "❌" button to divElem
    listContainer.append(divElem); // append each div inside the loop
    })
}

renderList(list);

function handleAddList(){

    let textValue = addInput.value;
    if(!textValue)
        return; // prevents adding empty tasks

    let obj = {
        id: Date.now(),
        text: textValue
    }
    list.push(obj);

    // clear aur render ke saath, localStorage pe data save karein
    localStorage.setItem("todoList", JSON.stringify(list));
    renderList(list);

    addInput.value = ""; //clear input after adding
}

function handleRemoveList(id){

    let filteredListAfterDeletion = list.filter(obj => {
        return obj.id !== id; // jo id delete karni hai, uske siva baaki pura list
    }) 
    list = filteredListAfterDeletion;

    // 3. Delete ke baad updated list ko localStorage mein dubara save karein
    localStorage.setItem("todoList", JSON.stringify(list));

    renderList(list);
}
addBtn.addEventListener("click", handleAddList);

// Initial Render (Page load hone par save hue items screen par dikhenge)
renderList(list);


