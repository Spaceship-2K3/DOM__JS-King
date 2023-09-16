const btnOpenEl = document.querySelector("#btnOpen");
const btnCloseEl = document.querySelector("#btnClose");
const modalTrainer = document.querySelector(".trailer-container");
btnCloseEl.addEventListener("click", function () {
    modalTrainer.classList.add("active");
});
btnOpenEl.addEventListener("click", function () {
    modalTrainer.classList.remove("active");
});
