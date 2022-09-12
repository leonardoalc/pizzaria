let html = document.querySelector("html")
let toggle = document.getElementById("toggle_theme")

toggle.addEventListener("change", () => {
    html.classList.toggle("dark_mode")
})