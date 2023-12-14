let gridSize = 12;

const container = document.querySelector("#container");
container.style.width = "80vh";
container.style.height = "80vh";


//creating grid of divs based on gridSize parameter
for(let i = 0; i < gridSize ** 2; i++) {
    let square = document.createElement("div");
    let gridWidth = container.offsetWidth / gridSize;

    square.style.width = `${gridWidth - 0.1}px`;
    square.style.height = square.style.width;
    square.classList.add('grid-item');
    square.style.outline = "grey solid";
    container.appendChild(square);

    //change color of square on mouse hover
    square.addEventListener("mouseover", (event) => {
        square.style.backgroundColor = "red";
    });

}


console.log(container.offsetWidth / gridSize);




