const containerEl = document.querySelector(".container");
const btnRandom = document.querySelector(".btn-random");
for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}
const containerEls = document.querySelectorAll(".color-container");
btnRandom.addEventListener("click", generateColor);
/**
*   ! Way 1 : 
    const setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        color.innerHTML = "#" + randomColor;
    }

*/
function generateColor() {
    containerEls.forEach((item) => {
        const colorItem = randomColor();
        item.style.backgroundColor = `#${colorItem}`;
        item.innerHTML = `#${colorItem}`;
    });
}

// ! principles : random numbers from 0->16 and cut characters from chars to create colorCode
function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}
randomColor();
