const navbar = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

/** 
*   todo : 
    console.log(navbar.offsetHeight);
    console.log(bottomContainerEl.offsetTop);
*/

// ! principles : when scroll change background
window.addEventListener("scroll", function () {
    if (
        this.window.scrollY >
        bottomContainerEl.offsetTop - navbar.offsetHeight - 50
    ) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
});
