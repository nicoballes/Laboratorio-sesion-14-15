let button = document.querySelector("#menu-button")
let navMenu = document.getElementById("nav-menu")

button.addEventListener("click", function() {
    navMenu.classList.toggle("visible")
})