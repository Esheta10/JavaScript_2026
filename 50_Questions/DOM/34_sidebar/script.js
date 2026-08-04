/**34. How would you toggle a class on an element when another element is clicked (e.g.,
show/hide sidebar)? */

let button  = document.querySelector("button")
let sidebar = document.querySelector(".sidebar")

button.addEventListener("click", (event) => {
    sidebar.classList.toggle("show-sidebar");
})