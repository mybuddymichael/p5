const margin = 40;

const step = 10;

function setup() {
  createCanvas(600, 600, SVG);
  strokeWeight(3);
  frameRate();
  background('peachpuff');
}

let currentCol = 0;
let currentRow = 0;

function draw() {
  let thisX = coordForRowOrColumn(currentCol);
  let thisY = coordForRowOrColumn(currentRow);
  if (thisX > width - margin - step) {
    currentCol = 0;
    currentRow += 1;
    thisX = coordForRowOrColumn(currentCol);
    thisY = coordForRowOrColumn(currentRow);
  }
  drawRandomLine(thisX, thisY, step);
  currentCol += 1;
  if (thisY > height - margin - step) {
    noLoop();
  }
  print(thisX);
}

function coordForRowOrColumn(column) {
  return column * step + margin;
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
