let nx = 0;
let fromColor;
let toColor;

function setup() {
  createCanvas(1200, 600, SVG);
  noLoop();
  noFill();
  fromColor = color(255, 199, 0);
  toColor = color(255, 55, 139);
}

function draw() {
  const range = [...Array(100).keys()];
  range.map((n) => {
    const lineColor = lerpColor(fromColor, toColor, norm(n, 0, 100));
    lineColor.setAlpha(map(n, 0, 100, 20, 255));
    strokeWeight(1);
    stroke(lineColor);
    beginShape();
    for (let i = 0; i <= width; i++) {
      let m = map(noise(nx, i * 0.003), 0, 1, -300, 300);
      vertex(i, height / 2 + m);
      nx += 0.000008;
    }
    endShape();
  });
}
