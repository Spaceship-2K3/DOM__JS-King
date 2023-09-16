const textAreaEl = document.querySelector("#textarea");
const totalCounterEl = document.querySelector(".total-counter");
const remainCounterEl = document.querySelector(".remaining-counter");

textAreaEl.addEventListener("keyup", updateCounter);

function updateCounter() {
    // todo : get max length of textarea
    const maxLength = parseInt(textAreaEl.getAttribute("maxlength"));
    totalCounterEl.innerHTML = textAreaEl.value.length;
    remainCounterEl.innerHTML = maxLength - parseInt(totalCounterEl.innerHTML);
}
