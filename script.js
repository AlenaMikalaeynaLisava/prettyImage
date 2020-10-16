const image = document.querySelector("img");
window.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        image.classList.toggle("pretty-image");
    }
})