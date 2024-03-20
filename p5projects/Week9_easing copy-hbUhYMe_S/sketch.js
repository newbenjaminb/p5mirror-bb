var x = 0;
var easing = 0.05;

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}

function draw() {
  background(0);
  fill(255, 100, 0);
  x += (mouseX - x) * easing;
  ellipse(x, height/2, 40, 40);
}