const board = document.querySelector("#board");
const screens = document.querySelectorAll(".screen");
const startBtn = document.querySelector(".start");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");

let time = 0;
let score = 0;

startBtn.addEventListener("click", (event) => {
    event.preventDefault();
    screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
    if (event.target.classList.contains("time-btn")) {
        time = parseInt(event.target.getAttribute("data-time"));
        screens[1].classList.add("up");
        startGame();
    }
});

board.addEventListener("click", (event) => {
    if (event.target.classList.contains("circle")) {
        score++;
        event.target.remove();
        createRandovCircle();
    }
});

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandovCircle();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        current = current < 10 ? `0${current}` : current;
        setTime(current);
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function createRandovCircle() {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    board.append(circle);
    const { width, height } = board.getBoundingClientRect();
    const size = getRandomNumber(10, 60);

    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    console.log(x);
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = getRandomColor();
    circle.style.border = "thin solid white";
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function finishGame() {
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`;
    timeEl.parentNode.classList.add("hide");
}

function getRandomColor() {
    const rgbColor = `rgb(${getRandomNumber(0, 255)},${getRandomNumber(
    0,
    255
  )},${getRandomNumber(0, 255)})`;
    return rgbColor;
}