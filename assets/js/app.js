// Max Grid
const GRID_SIZE = 16;

// Get the canvas element
const canvas = document.querySelector("#canvas");

function createSingleDiv(row) {
  // Create a single div element
  const div = document.createElement("div");
  // Set height and width for the div
  div.classList.add("div-single");

  return row.appendChild(div);
}

// Create a row
function createRow(size) {
  // Create Grid by using 2 dimenssional loop
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      createSingleDiv(row);
    }
    canvas.appendChild(row);
  }
}

createRow(GRID_SIZE);
console.log(canvas);

const drawPoint = Array.from(document.querySelectorAll(".div-single"));
console.log(drawPoint);
console.log(drawPoint[0]);

// Set up mouse hover event listener
canvas.addEventListener("mousedown", (e) => {
  // console.log(e.target.firstElementChild);
  if (!e.target.firstElementChild) {
    e.target.classList.add("black");
    canvas.addEventListener("mouseover", (e) => {
      if (!e.target.firstElementChild) {
        e.target.classList.add("black");
      }
    });
  }
});
