const imagContainerEl = document.querySelector(".image-container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    let imageNum = 10;
    addNewImages(imageNum);
});

function addNewImages(imageNum) {
    for (let index = 0; index < imageNum; index++) {
        const newImgEl = document.createElement("img");
        const randomImg = Math.floor(Math.random() * 2000);
        newImgEl.src = `https://picsum.photos/200/300?random=${randomImg}`;
        imagContainerEl.appendChild(newImgEl);
    }
}
