const canvasX = 600;
const canvasY = 600;
const margin = 40;

function setup() {
  createCanvas(canvasX, canvasY, SVG);
  noLoop();
}

function draw() {
  const step = 10;
  for (let x = margin; x < canvasX - margin; x = x + step) {
    for (let y = margin; y < canvasY - margin; y = y + step) {
      strokeWeight(3);
      drawRandomLine(x, y, step);
    }
  }
}

function drawRandomLine(x, y, step) {
  const r = random();
  if (r > 0.5) {
    if (r > 0.7) {
      // Just don't draw.
    } else {
      // Draw top left to bottom right.
      line(x, y, x + step, y + step);
    }
  } else {
    // Draw top right to bottom left.
    line(x + step, y, x, y + step);
  }
}
