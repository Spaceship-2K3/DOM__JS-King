const kits = ["crash", "kick", "tom", "snare"];
const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.setAttribute("type", "button");
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = `url(./assets/img/${kit}.png)`;
    containerEl.appendChild(btnEl);
    const audioEl = document.createElement("audio");
    audioEl.src = `./assets/img/sound/${kit}.mp3`;
    containerEl.appendChild(audioEl);
    btnEl.addEventListener("click", function () {
        audioEl.play();
    });

    window.addEventListener("keydown", function (e) {
        if (e.key === kit.slice(0, 1)) {
            audioEl.play();
            btnEl.style.transform = "scale(1.1)";
            this.setTimeout(() => {
                btnEl.style.transform = "scale(1)";
            }, 100);
        }
    });
});
