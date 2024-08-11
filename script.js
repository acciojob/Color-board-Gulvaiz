let container = document.querySelector(".container");

for (let i = 0; i < 800; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

const squares = document.querySelectorAll('.square');

// Add event listeners to each square
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'orange';
        setTimeout(() => {
            square.style.backgroundColor = 'rgb(128, 128, 128)';
        }, 1000);
    });
});
