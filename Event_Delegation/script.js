let container = document.querySelector(".container");
let box = document.querySelector(".box");

// container.childNodes.forEach((elem) => {
//     elem.addEventListener("click",()=>{
//         console.log(elem.innerText);
//     })
// })

container.addEventListener("click",(event)=>{
    if(event.target.className === "box"){
        console.log(event.target.innerText);
    } 
})