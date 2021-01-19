const margin = 32;

function setup() {
  createCanvas(1200, 800, SVG);
  noLoop();
}

function draw() {
  background(220);
  const range = [...Array(200).keys()];
  let points = [];

  range.map((r) => {
    const x = floor(random(0 + margin, width - margin));
    const y = floor(random(0 + margin, height - margin));
    const hasLine = false;
    points.push({
      x,
      y,
      hasLine,
    });
  });

  points.map((p) => {
    points.map((ptwo) => {
      if ((p.x == ptwo.x && p.y == ptwo.y) || p.hasLine) {
        return;
      }
      const dis = dist(p.x, p.y, ptwo.x, ptwo.y);
      if (dis < 64) {
        stroke(255);
        strokeWeight(2);
        line(p.x, p.y, ptwo.x, ptwo.y);
        p.hasLine = true;
        ptwo.hasLine = true;
      }
    });
  });

  points.map((p) => {
    stroke(0);
    strokeWeight(floor(random(2, 8) + random(2, 8)));
    point(p.x, p.y);
  });
}
