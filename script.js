let size = 800;
let dimensions = 100;
const container = document.querySelector(".container");
container.style.height = `${size}px`;
container.style.width = `${size}px`;
let mouseDown = false;
let leftClick = false;

container.addEventListener("mousedown", (e) => {
    mouseDown = true;
    if(e.button === 0) {
        leftClick = true;
    } else {
        leftClick = false;
    }

});
container.addEventListener("mouseup", ()=> {mouseDown = false;});

function createGrid(num) {
    console.log("working!");

    for(let i = 0; i < num; i++) {
        const row = document.createElement("div");

        for(let j = 0; j < num; j++) {
            const col = document.createElement("div");

            col.style.height = `${size / num}px`;
            col.style.width = `${size / num}px`;

            col.addEventListener("mouseover", () => {
                if(mouseDown) {
                    if(leftClick) {
                        col.style.backgroundColor = "red";
                    } else {
                        col.style.backgroundColor = "white";
                    }
                }
            });

            col.classList.add("boxes");
            row.appendChild(col);
        }

        container.appendChild(row);
    }

    console.log("finished!");
}

createGrid(dimensions);