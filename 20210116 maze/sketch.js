const margin = 40;

const step = 10;

function setup() {
  noLoop();
  createCanvas(600, 600, SVG);
  background('peachpuff');
  strokeWeight(3);
}

function draw() {
  const step = 10;
  for (let x = margin; x < width - margin; x = x + step) {
    for (let y = margin; y < height - margin; y = y + step) {
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
