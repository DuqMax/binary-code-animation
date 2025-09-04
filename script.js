const startButton = document.getElementById("start")

startButton.addEventListener("click", () => {
    document.querySelectorAll("body *").forEach(el => {
      el.classList.add("vanish");
    });
    
    setTimeout(() => {
        document.querySelector("main").remove();
    }, 1100);

    setTimeout(() => {
        setInterval(() => {
            codeRain();
        }, 50);
    }, 500);
  });

function codeRain() {
    let documentWidth = window.innerWidth;
    let randomX = (Math.floor(Math.random() * documentWidth) + 1) + "px";

    for (let i = 0; i < 4; i++) {
        let number = Math.floor(Math.random() * 2);
        let text = document.createElement("span");

        text.innerText = number;
        text.style.left = randomX;
        text.style.top = (-i * 30) + "px";
        text.style.animationDuration = (Math.random() * 3 + 1) + "s";

        document.body.append(text);

        setTimeout(() => {
            text.remove();
        }, 3000);
    }
}
