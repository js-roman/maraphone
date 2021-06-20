const board = document.querySelector("#board");
let rgbColor = [0, 122, 255];

const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
        setColor(square);
    });

    square.addEventListener("mouseleave", () => {
        removeColor(square);
    });

    board.append(square);
}

function setColor(element) {
    setNextColor();
    const color = `rgb(${rgbColor[0]},${rgbColor[1]},${rgbColor[2]})`;
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = "#1d1d1d";
    element.style.boxShadow = `0 0 2px #1d1d1d`;
}

function setNextColor() {
    (rgbColor[0] += 7) > 255 ? (rgbColor[0] = 0) : rgbColor[0];
    (rgbColor[1] += 11) > 255 ? (rgbColor[1] = 0) : rgbColor[1];
    (rgbColor[2] += 13) > 255 ? (rgbColor[2] = 0) : rgbColor[2];
}