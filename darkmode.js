let html = document.querySelector("html")
let toggle = document.getElementById("darkmode")

toggle.addEventListener("change", () => {
    html.classList.toggle("dark-mode")
})