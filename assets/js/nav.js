const navIcon = document.getElementById("nav-icon")
const navItems = document.getElementById("nav-items")

navIcon.addEventListener("click", (e) => {
    navItems.classList.toggle("hidden");
})