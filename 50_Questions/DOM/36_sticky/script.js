/**36. Create a Sticky Header on Scroll. The header becomes fixed to the top after scrolling
down. (Key concepts: scroll event, window.scrollY, classList.add/remove) */

let navbar = document.querySelector("nav")


window.addEventListener("scroll", (event) => {

    if(window.scrollY > 100){
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
    console.log(window.scrollY);
})


