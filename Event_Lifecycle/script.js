let grandParent = document.querySelector(".grand-parent")
let parent = document.querySelector(".parent")
let child = document.querySelector(".child")

console.log("Event-Bubbling");

grandParent.addEventListener("click", (event)=>{

    console.log("GRAND-PARENT")
    console.log("event.target - ",event.target)
    console.log("event.currentTarget - ",event.currentTarget)

})

parent.addEventListener("click", (event)=>{
   
    console.log("PARENT")
    console.log("event.target - ",event.target)
    console.log("event.currentTarget - ",event.currentTarget)
    event.stopPropagation();

})

child.addEventListener("click", (event)=>{
    
    console.log("CHILD")
    console.log("event.target - ",event.target)
    console.log("event.currentTarget - ",event.currentTarget)

})


// parent.addEventListener("click", ()=>{

//     console.log("PARENT");
//     console.log("event.target - ",event.target);
//     console.log("event.currentTarget - ",event.currentTarget);
//     console.log("this - ",this);
// })

