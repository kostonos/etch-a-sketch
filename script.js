let gridSize = 12;

const container = document.querySelector("#container");
container.style.width = "80vh";
container.style.height = "80vh";

for(let i = 0; i < gridSize ** 2; i++) {
    let square = document.createElement("div");
    let gridWidth = container.offsetWidth / gridSize;

    square.style.width = `${gridWidth - 0.1}px`;
    square.style.height = square.style.width;
    // square.style.height = `${parseInt(container.style.width,10)/gridSize}%`;
    // square.style.backgroundColor = "green";
    square.classList.add('grid-item');
    square.style.outline = "grey solid";
    // square.style.borderWidth = "1px";
    // square.style.margin = `${parseFloat(container.style.width,1)*0.01}%`;
    container.appendChild(square);

}

console.log(container.offsetWidth / gridSize);




