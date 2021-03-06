const containerRadius = 300;
const maxCircleRadius = 8;
const minCircleRadius = 1;
const circleMargin = 3;
const totalCircles = 2000;
const maxTries = 100;

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  const containerCircle = createCircle(width / 2, height / 2, containerRadius);
  const circles = createCircles(totalCircles, containerCircle);
  stroke(0);
  circles.map((c) => {
    if (c) {
      circle(c.x, c.y, c.radius * 2);
    }
  });
}

function createCircles(n, containerCircle, circles = []) {
  if (n <= 0) return circles;
  let circle = createSafeCircle(containerCircle, circles, maxTries);
  circles = [circle, ...circles];
  return createCircles(n - 1, containerCircle, circles);
}

function createSafeCircle(containerCircle, circles, maxTries) {
  let { x, y, radius } = containerCircle;
  if (maxTries <= 0) return null;
  let circle = createCircle(
    random(x - radius, x + radius),
    random(y - radius, y + radius),
    random(minCircleRadius, maxCircleRadius + 1)
  );
  if (
    anyOverlap(circle, circles) ||
    isOutsideContainer(circle, containerCircle)
  ) {
    return createSafeCircle(containerCircle, circles, maxTries - 1);
  } else {
    return circle;
  }
}

function createCircle(x, y, radius) {
  return { x: x, y: y, radius: radius };
}

function isOutsideContainer(
  { x, y, radius },
  { x: containerX, y: containerY, radius: containerRadius }
) {
  const distance = dist(x, y, containerX, containerY);
  const includingEdge = distance + radius;
  return includingEdge > containerRadius;
}

function anyOverlap(circle, circles) {
  return circles.some((c) => {
    if (!circle || !c) {
      return false;
    } else {
      return overlaps(circle, c);
    }
  });
}

function overlaps({ x, y, radius }, { x: x2, y: y2, radius: radius2 }) {
  const distance = dist(x, y, x2, y2);
  const actualDistance = distance - radius - radius2;
  if (actualDistance < circleMargin) {
    return true;
  } else {
    return false;
  }
}
