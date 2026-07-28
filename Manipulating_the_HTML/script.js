// let h1 = document.querySelector("h1")
// // console.log(h1.tagName)
// // console.log(h1.nodeName)
// // console.log(h1.firstChild)


// console.log(`innerText:  ${h1.innerText}`)
// console.log(`textContent: ${h1.textContent}`)
// console.log(`innnerHTML: ${h1.innerHTML}`)

// div.append(`<p>I will be added inside but at the end of node</p>`)

// div.prepend(`<p>I will be added inside but at the start of node</p>>`)

// div.after(`<p>I will be added outside after the node</p>`)

// div.before(`<p>I will be added outside before the node</p>`)

// div.remove()

// let elem = document.createElement('p')
// elem.innerText = "Insert Adjacent Element"

// div.insertAdjacentElement("beforeEnd", elem)

let div = document.querySelector("div")
console.log(div);

let para2 = document.querySelector(".para-2");
para2.style.backgroundColor = "blue";

let parentNode = para2.parentNode;

// Create a single element to append
let newPara = document.createElement("p");
newPara.innerText = "Learning about parentNode.replaceChild property";

// Add the new <p> node after para2
para2.after(newPara);


// parentNode.replaceChild(newPara, para2);

// parentNode.removeChild(newPara)

parentNode.append(newPara)


let childrens = div.children
console.log(childrens)