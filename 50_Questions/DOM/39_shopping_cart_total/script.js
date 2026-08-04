//39. How do you use .reduce() to calculate the total price in a shopping cart?
const cartContainer = document.querySelector(".shopping-cart-total")

const cartItems = [
    {
        id:1,
        name: "books",
        price: 200,
        quantity: 4
    },
    {
        id: 2,
        name: "pens",
        price: 10,
        quantity: 10
    },
    {
        id: 3,
        name: "bag",
        price: 1000,
        quantity: 1
    }
]
const totalPrice = cartItems.reduce((acc, item) => {

    return acc + (item.price * item.quantity)
},0)

cartContainer.innerText = `Total Price: ₹${totalPrice}`

