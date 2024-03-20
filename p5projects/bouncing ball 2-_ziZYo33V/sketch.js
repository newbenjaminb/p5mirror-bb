var bb = {
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
  circle(bb.x, bb.y, bb.radius * 2);
  moveIt();
  cornerBounce();
}



function cornerBounce() {
  if (bb.x >= width - bb.radius || bb.x <= bb.radius) {
    bb.xspeed = -bb.xspeed;
  }
  if (bb.y >= height - bb.radius || bb.y - bb.radius <= 0) {
    bb.yspeed = -bb.yspeed;
  }
}

function moveIt() {
  bb.x = bb.x + bb.xspeed;
  bb.y = bb.y + bb.yspeed;
}
