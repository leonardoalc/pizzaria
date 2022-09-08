function darkmode() {
    let botao = document.getElementById("toggle_theme")
    if (botao.checked) {
        document.body.style.background = "#121212"
    } else {
        document.body.style.background = "white"
    }
}