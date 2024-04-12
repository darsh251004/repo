const letters = ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ"];
let currentLetter = 0;

const letterDisplay = document.getElementById("letter");
const writingCanvas = document.getElementById("writingCanvas");
const ctx = writingCanvas.getContext("2d");
const nextBtn = document.getElementById("nextBtn");

function displayLetter() {
  letterDisplay.textContent = letters[currentLetter];
}

function clearCanvas() {
  ctx.clearRect(0, 0, writingCanvas.width, writingCanvas.height);
}

function handleMouseDown(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  ctx.beginPath();
  ctx.moveTo(x, y);
  writingCanvas.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
}

function handleMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  ctx.lineTo(x, y);
  ctx.stroke();
}

function handleMouseUp() {
  writingCanvas.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp);
}

function handleKeyDown(event) {
  if (event.key === "ArrowRight") {
    currentLetter = (currentLetter + 1) % letters.length;
    displayLetter();
  } else if (event.key === "ArrowLeft") {
    currentLetter = (currentLetter - 1 + letters.length) % letters.length; // Handle negative index
    displayLetter();
  }
}

function handleNext() {
  currentLetter = (currentLetter + 1) % letters.length;
  displayLetter();
  clearCanvas(); // Clear the canvas when moving to the next letter
}

displayLetter();

writingCanvas.addEventListener("mousedown", handleMouseDown);
document.getElementById("clearBtn").addEventListener("click", clearCanvas);
document.addEventListener("keydown", handleKeyDown);
nextBtn.addEventListener("click", handleNext); // Add event listener for Next button
