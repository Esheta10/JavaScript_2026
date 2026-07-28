let div = document.querySelector(".box")
console.log(div.attributes)
console.log(div.getAttribute("title"))
console.log(div.attributes.class.value)

div.setAttribute('style', 'font-size: 40px')


let p = document.querySelector(".p")
console.log(p);

p.setAttribute("style", "background-color: black; color: green; font-weight: bold")

console.log(p.attributes)


let button = document.createElement("button")
button.innerText = "Click Me";
p.append(button)

let div1 = document.querySelector(".div1")
console.log(div1)

let newDiv = document.createElement("div")

newDiv.setAttribute("class", "I am the class inside newDiv")
console.log(newDiv.attributes)

newDiv.setAttribute("style", "background-color: magenta; color: white;")
newDiv.innerText = "Dr.B.R.Ambedkar"

div1.append(newDiv)


let oldNode = document.querySelector("#my-text")
replaceTagName(oldNode, "h1")

function replaceTagName(node, newTagName){

    // h1 tag
    let newNode = document.createElement(newTagName); 

    // copying the contents of old tag into new tag
    newNode.innerHTML = node.innerHTML;

    // puraani styling/ attributes -> naye box mein daal do
    for(let attr of node.attributes){
        newNode.setAttribute(attr.name, attr.value);
    }

    // puraane box ko hata kar, naya box fix kar do
    node.replaceWith(newNode);

    return newNode;
}
