// -------------------------------
// Variable Declaration
// -------------------------------

// Default Cells
const CELLS = 16;

// Get the canvas element
const canvas = document.querySelector("#canvas");

// Get the cell option element
const option = document.querySelector("#option");
// Get the input element
const input = document.querySelector("#custom-cell");

// 1 Rem in Pixel
const oneRemInPixel = parseFloat(
  getComputedStyle(document.documentElement).fontSize
);

// -------------------------------
// Main
// -------------------------------

// Create the default Grid
createGrid(CELLS);

// Dot drawing
canvas.addEventListener("mousedown", drawDot);

// Custom Cell
option.addEventListener("click", (e) => {
  e.preventDefault();
  input.setAttribute("placeholder", "Number of Cells");

  // Prevent action when clicking on the input field
  if (e.target.id === "custom-cell") {
    return;
  }

  // Generate Grid when user click on "Generate Grid button"
  // Check for valid input
  if (
    e.target.id === "btnGenerateGrid" &&
    (!Number.isInteger(parseInt(input.value)) || parseInt(input.value) <= 0)
  ) {
    input.value = "";
    input.setAttribute("placeholder", "Number only");
    return;
  }
  // If input is valid, assign input value to a variable for later calculation
  const cellCount = input.value;

  // Clear the input field
  input.value = "";

  createCustomGrid(cellCount);

  // Reset the Grid
  if (e.target.id === "btnReset") {
    createGrid(CELLS);
    return;
  }
});

// -------------------------------
// Functions
// -------------------------------

// Create a single div function
function createSingleDiv(row) {
  // Create a single div element
  const div = document.createElement("div");
  // Set height and width for the div
  div.classList.add("div-single");

  return row.appendChild(div);
}

// Create Grid Function
function createGrid(cell) {
  // Create Grid by using 2 dimenssional loop
  for (let i = 0; i < cell; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < cell; j++) {
      createSingleDiv(row);
    }
    canvas.appendChild(row);
  }
}

// Drawn Dot function
function drawDot(e) {
  // Disable dragging element
  e.preventDefault();
  const dot = e.target;
  // Since we listen on the canvas, we need to make sure only to draw dot
  // on the single div, which mean the inner most child.
  if (!dot.firstElementChild) {
    dot.classList.add("black");

    canvas.addEventListener("mouseover", drawDot);
  }
  // Stop drawing dot when user release the mouse
  canvas.addEventListener("mouseup", (e) => {
    canvas.removeEventListener("mouseover", drawDot);
  });
}

// Create Custom Grid
function createCustomGrid(cellCount) {
  // Calculate Cell Dimenstion in rem
  const cellDimension = canvas.clientHeight / cellCount / oneRemInPixel;

  // Select all row
  const rowArr = Array.from(document.querySelectorAll(".row"));

  rowArr.forEach((item) => item.remove());

  // Create new Custom grid
  createGrid(cellCount);

  const divArr = Array.from(document.querySelectorAll(".div-single"));

  divArr.forEach((item) => {
    item.setAttribute("style", `width: ${cellDimension}rem`);
  });
}
