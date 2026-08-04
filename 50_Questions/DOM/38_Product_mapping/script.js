//38. How would you use .map() to transform a list of products into a list of HTML elements?

const productContainer = document.querySelector(".product-list")
const products = [
    {
        id:1,
        name: "Laptop",
        price: "70000"
    },
    {
        id:2,
        name: "Smart-Phone",
        price: "20000"
    },
    {
        id:3,
        name: "Tablet",
        price: "35000"
    }
]

let productCards = products.map((product) => {

    return `
        <div class="product-card">
            Name: ${product.name}
            <br/>
            Price: ${product.price}
        </div>
    `
})

console.log(productCards)

productContainer.innerHTML = productCards.join("");

console.log(productContainer)


