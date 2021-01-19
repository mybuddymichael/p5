const margin = 40;

const step = 10;

function setup() {
  createCanvas(600, 600, SVG);
  strokeWeight(3);
  frameRate(300);
  background('peachpuff');
}

let currentX = 1;
let currentY = 1;

function draw() {
  const thisX = currentX * step + margin;
  const thisY = currentY * step + margin;
  drawRandomLine(thisX, thisY, step);
  currentX += 1;
  print(currentX);
  if (thisX > width - margin * 2) {
    currentX = 1;
    currentY += 1;
  }
  if (thisY > height - margin * 2) {
    noLoop();
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
