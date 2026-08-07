console.log("task-1")
console.log("task-2")
setTimeout(()=>{
    console.log("I am an async task")
},5000)
console.log("task-3")
console.log("task-4")


async function fetchPosts(){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(await response.json());
}

fetchPosts()

