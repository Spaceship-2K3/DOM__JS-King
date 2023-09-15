const hourEl = document.querySelector("#Hours");
const minuteEl = document.querySelector("#Minutes");
const secondEl = document.querySelector("#Seconds");
const ampmEl = document.querySelector("#ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = h > 12 ? "PM" : "AM";

    hourEl.innerText = h < 10 ? `0${h}` : h;
    minuteEl.innerText = m < 10 ? `0${m}` : m;
    secondEl.innerText = s < 10 ? `0${s}` : s;
    ampmEl.innerText = ampm;
    setTimeout(updateClock, 1000);
}
updateClock();
