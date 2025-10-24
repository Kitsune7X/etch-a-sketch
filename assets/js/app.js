// Max Grid
const GRID_SIZE = 16;

// Get the canvas element
const canvas = document.querySelector("#canvas");

// Spawn the div inside the canvas
// canvas.appendChild(div);

function createSingleDiv() {
  // Create a single div element
  const div = document.createElement("div");
  // Set height and width for the div
  div.classList.add("div-single");

  return canvas.appendChild(div);
}

// console.log(createSingleDiv());

// Create a row
function createRow(size) {
  for (let i = 0; i < size; i++) {
    createSingleDiv();
  }
}

createRow(GRID_SIZE);
// console.log(1rem);
