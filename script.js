//your JS code here. If required.
let container =  document.querySelector(".container")

for(let i=0; i<800; i++){
 let square = document.createElement("div")
square.classList.add("square");
square.style.backgroundColor = "grey"
container.appendChild(square)
}

const squares = document.querySelectorAll('.square');
// Add event listeners to each square
squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'orange';
    setTimeout(() => {
      square.style.backgroundColor = 'grey';
    }, 1000);
  });
});

