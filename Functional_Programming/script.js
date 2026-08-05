// imperative programming

let arr = [1,2,3,4,5]

for(let i=0; i<arr.length; i++){

    arr[i] = arr[i]*2;
}
console.log(arr); //[ 2, 4, 6, 8, 10 ]

// Declarative Programming

let arr2 = [1,2,3,4,5];
let newArray = arr2.map((elem) => {
    return elem*2;
})
console.log(newArray);  //[ 2, 4, 6, 8, 10 ]


