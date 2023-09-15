const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const inputEl = document.querySelector("#input");
const formEl = document.querySelector("#form");

const questionEl = document.querySelector("#question");
questionEl.innerHTML = `What is ${num1} multiply by ${num2}?`;
const correctAns = num1 * num2;
let score = JSON.parse(localStorage.getItem("score")) || 0;
const scoreEl = document.querySelector("#score");

scoreEl.innerHTML = `score: ${score}`;
formEl.addEventListener("submit", (e) => {
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        score++;
        updateLocalStorage(score);
    } else {
        score--;
        updateLocalStorage(score);
    }
});

function updateLocalStorage(score) {
    localStorage.setItem("score", JSON.stringify(score));
}
