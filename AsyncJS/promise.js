let p1 = new Promise((resolve,reject)=>{
    resolve("Promise hai ye...")
})

console.log(p1);

let p2 = new Promise((resolve,reject) => {

    setTimeout(()=>{
       resolve({
        name: "Esheta",
        task: "Learning Promises..."
       })
    })
})

console.log(p2);

p2.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})


