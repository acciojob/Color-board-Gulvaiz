//your JS code here. If required.
let container =  document.querySelector(".container")

for(let i=0; i<800; i++){
 let square = document.createElement("div")
square.className = "square";
square.style.backgroundColor = "grey"
container.append(square)
}