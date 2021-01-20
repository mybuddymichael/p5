const containerRadius = 200;
const maxCircleRadius = 8;
const minCircleRadius = 2;

function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  // Get the middle of the big circle
  const middleX = width / 2;
  const middleY = height / 2;
  const containerCircle = createCircle(middleX, middleY, containerRadius);
  stroke(0);
  circle(middleX, middleY, containerRadius * 2);
  // Define its radius.
  // Draw X amount of circles, randomly
  // If the circle is overlapping another circle, try to come up with new coordinates
}

function createCircle(x, y, radius) {
  return { x: x, y: y, radius: radius };
}

function createCircles(n, containerCircle, circles = []) {
  if (n <= 0) return;
  let circle = createSafeCircle(containerCircle, circles, 10);
  // Each circle should be within the circle's radius
  // If a circle is not, try to come up with new coordinates
  createCircles(n - 1, middleX, middleY);
}

function createSafeCircle({ x, y, radius }, circles, maxTries) {
  if (maxTries <= 0) return;
  let circle = createCircle(
    random(x - radius, x + radius),
    random(y - radius, y + radius),
    random(minCircleRadius, maxCircleRadius + 1)
  );
}

function isOutsideContainer(
  { x, y, radius },
  { x: containerX, y: containerY, radius: containerRadius }
) {
  const distance = dist(x, y, containerX, containerY);
  const includingEdge = distance + radius;
  return includingEdge > containerRadius;
}

function overlaps({ x, y, radius }, { x: x2, y: y2, radius: radius2 }) {
  const distance = dist(x, y, x2, y2);
  const actualDistance = distance - radius - radius2;
  if (actualDistance < 1) return true;
}

function anyOverlap(circle, circles) {
  return circles.some((c) => {
    overlaps(circle, c);
  });
}
