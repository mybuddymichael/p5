let nx = 0;

function setup() {
  createCanvas(1200, 600, SVG);
  noLoop();
  noFill();
  stroke(2);
}

function draw() {
  const range = [...Array(100).keys()]
  range.map(n => {
    stroke(0, map(n, 0, 100, 20, 255))
    beginShape();
    for (let i = 0; i <= width; i++) {
      let m = map(noise(nx, i * 0.003), 0, 1, -300, 300);
      vertex(i, height / 2 + m);
      nx += 0.00001;
    }
    endShape();
  });
}
