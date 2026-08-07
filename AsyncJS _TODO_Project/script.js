let todoContainer = document.querySelector(".todo-container")
let inputText = document.querySelector("#inputText")
let addBtn = document.querySelector(".addBtn")


let API = "https://6a75929d32ae114127839927.mockapi.io/api/v1/todos"

addBtn.addEventListener("click",postData);

async function fetchData(){
    let response = await fetch(API);
    let data = await response.json()

    if(data){

            todoContainer.innerHTML = '';

            data.forEach((obj) => {
            console.log(obj);

            let divElem = document.createElement("div")
            divElem.className = "todo";
            console.log(divElem);

            divElem.innerHTML = `
                <span class="enterText">${obj.text}</span>
                <input id="inputText" class="editInput" type="text" placeholder="Enter your task.." />
                <div class="actions">
                    <button class="editBtn">Edit</button>
                     <button class="saveBtn">Save</button>
                    <button class="deleteBtn">Delete</button>
                </div>
            `
            let deleteBtn = divElem.querySelector(".deleteBtn");
            deleteBtn.addEventListener("click", function(){
               deleteData(obj.id);
            })
            
            let editBtn = divElem.querySelector(".editBtn");
            let editInput = divElem.querySelector(".editInput")
            let enterText = divElem.querySelector(".enterText")
            editBtn.addEventListener("click",function(){
                editBtn.style.display = "none";
                saveBtn.style.display = "inline";
                editInput.style.display = "inline";
                editInput.value = obj.text;
                enterText.style.display = "none";
            })

            let saveBtn = divElem.querySelector(".saveBtn");
            saveBtn.addEventListener("click", async function(){
                let editValue = editInput.value;

                let response = await updateData(obj.id, editValue);
                if(response.status === 200){
                    saveBtn.style.display = "none";
                    editBtn.style.display = "inline";
                    editInput.style.display = "none";
                    enterText.style.display = "inline";
                    fetchData();
                }
                
            })
            todoContainer.append(divElem);
        })
    }
}

async function postData(){

    let value = inputText.value;

    if(value === ""){
        alert("Please enter a task");
        return;
    }

    let objData = {
        text: value.trim(),
    }

    let response = await fetch(API,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(objData),
    });

    if(response.status === 201){
        fetchData();
        inputText.value = " ";
    }
}

async function deleteData(id){

    let response = await fetch(`${API}/${id}`,{
        method: "DELETE",
    });
    if(response.status === 200){
        fetchData();
    }
}

async function updateData(id, value){


    let objData = {
        text: value.trim(),
    }

    let response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(objData),
    })
    return response;
}
fetchData();