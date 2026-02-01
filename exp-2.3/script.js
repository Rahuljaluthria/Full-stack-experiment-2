const svg = document.getElementById("drawingArea");

let isDrawing = false;
let startX = 0;
let startY = 0;
let currentLine = null;

// Mouse down → start drawing
svg.addEventListener("mousedown", (e) => {
  isDrawing = true;

  startX = e.offsetX;
  startY = e.offsetY;

  currentLine = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );

  currentLine.setAttribute("x1", startX);
  currentLine.setAttribute("y1", startY);
  currentLine.setAttribute("x2", startX);
  currentLine.setAttribute("y2", startY);
  currentLine.setAttribute("stroke", "black");
  currentLine.setAttribute("stroke-width", "2");

  svg.appendChild(currentLine);
});

// Mouse move → draw line
svg.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;

  currentLine.setAttribute("x2", e.offsetX);
  currentLine.setAttribute("y2", e.offsetY);
});

// Mouse up → stop drawing
svg.addEventListener("mouseup", () => {
  isDrawing = false;
  currentLine = null;
});
