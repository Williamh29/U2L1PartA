const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
const button2 = document.getElementById("button2")


button2.addEventListener("click", updateHeight);


function updateHeight(){
  const height = prompt("Enter new height");
  button2.textContent = `Player 1: ${height}`;
}


