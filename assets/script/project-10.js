const bgImage = document.querySelector(".bg-image");
window.addEventListener("scroll", function () {
    updateImage();
});

function updateImage() {
    // todo : Take the screen size and divide it by 800
    bgImage.style.opacity = 1 - window.pageYOffset / 900;
    bgImage.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}
