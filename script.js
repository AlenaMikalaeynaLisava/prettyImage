const image = document.querySelector(".pretty-image");
window.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        image.classList.toggle("pretty-image");
    }
})