const startButton = document.getElementById("start");

startButton.addEventListener("click", () => {
    document.querySelectorAll("body *").forEach(el => {
      el.classList.add("vanish");
    });
    
    setTimeout(() => {
        document.querySelector("main").remove();
    }, 1100);

    setTimeout(() => {
        setInterval(() => {
            generateCollumn();
        }, 50);
    }, 500);
  });


function generateCollumn() {
    const collumn = document.createElement("div");
    collumn.classList.add("collumn")
    let randomX = Math.floor(Math.random() * window.innerWidth) + 1;
    collumn.style.left = randomX + "px";
    let charSize = (Math.floor(Math.random() * 30)) + 1;
    for (let index = 0; index < charSize; index++) {
        let randomChar = Math.floor(Math.random() * 2);
        const span = document.createElement("span");
        if (randomChar == 0) {
            span.style.color = "#7fe706";
        } else {
            span.style.color = "#008F11";
        }
        span.innerText = randomChar;
        collumn.appendChild(span);
    }
    document.body.append(collumn);
    setTimeout(() => {
        collumn.remove();
    }, 3000);
}
