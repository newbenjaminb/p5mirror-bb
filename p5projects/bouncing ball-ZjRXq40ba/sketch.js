var bball = {
  x: 200,
  y: 200,
  xspeed: 4,
  yspeed: 2,
  radius: 50,
  fill: (0, 50),
};

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0);

  // define a circle
  // give bball attributes to the circle
  circle(bball.x, bball.y, bball.radius * 2);

  bball.x = bball.x + bball.xspeed;
  bball.y = bball.y + bball.yspeed;

  if (bball.x >= width - bball.radius || bball.x <= bball.radius) {
    bball.xspeed = -bball.xspeed;
  }

  if (bball.y >= height - bball.radius || bball.y - bball.radius <= 0) {
    bball.yspeed = -bball.yspeed;
  }
}
