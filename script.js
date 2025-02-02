let size = 800;
let dimensions = 100;

const container = document.querySelector(".container");
const resize = document.querySelector("#resize");
const erase = document.querySelector("#erase");

container.style.height = `${size}px`;
container.style.width = `${size}px`;
let mouseDown = false;
let leftClick = false;

resize.addEventListener("click", () => {
    dimensions = parseInt(prompt("Enter the new dimension on the grid: "));
    createGrid(dimensions);
});

erase.addEventListener("click", () => {
    createGrid(dimensions);
});

container.addEventListener("mousedown", (e) => {
    mouseDown = true;
    if(e.button === 0) {
        leftClick = true;
    } else {
        leftClick = false;
    }

});

container.addEventListener("mouseup", ()=> {mouseDown = false;});

container.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

function createGrid(num) {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for(let i = 0; i < num; i++) {
        const row = document.createElement("div");

        for(let j = 0; j < num; j++) {
            const col = document.createElement("div");

            col.style.height = `${size / num}px`;
            col.style.width = `${size / num}px`;

            col.addEventListener("mouseover", () => {
                if(mouseDown) {
                    if(leftClick) {
                        col.style.backgroundColor = `${document.querySelector("#favcolor").value}`;
                    } else {
                        col.style.backgroundColor = "white";
                    }
                }
            });

            col.addEventListener("mousedown", () => {
                if(leftClick) {
                    col.style.backgroundColor = `${document.querySelector("#favcolor").value}`;
                } else {
                    col.style.backgroundColor = "white";
                }
            });

            col.classList.add("boxes");
            row.appendChild(col);
        }

        container.appendChild(row);
    }
}

createGrid(dimensions);