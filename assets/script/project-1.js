const hourEl = document.querySelector("#Hours");
const minuteEl = document.querySelector("#Minutes");
const secondEl = document.querySelector("#Seconds");
const ampmEl = document.querySelector("#ampm");
const btnPlay = document.querySelector("#btn-control-play");
const btnPause = document.querySelector("#btn-control-pause");
let intervalId = setInterval(updateClock, 1000);
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = h > 12 ? "PM" : "AM";

    hourEl.innerText = h < 10 ? `0${h}` : h;
    minuteEl.innerText = m < 10 ? `0${m}` : m;
    secondEl.innerText = s < 10 ? `0${s}` : s;
    ampmEl.innerText = ampm;
}

btnPlay.addEventListener("click", function () {
    if (!intervalId) {
        // todo : Start the clock update interval if it's not already running
        intervalId = setInterval(updateClock, 1000);
    }
});
btnPause.addEventListener("click", function () {
    if (intervalId) {
        // todo : Clear the interval only if it's running
        clearInterval(intervalId);
        intervalId = undefined; // Reset the interval ID
    }
});
