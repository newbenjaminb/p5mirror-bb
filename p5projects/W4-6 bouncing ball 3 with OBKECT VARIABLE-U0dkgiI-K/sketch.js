var bb = {
  x: 200,
  y: 200,
  xspeed: 4,
  yspeed: 3,
  radius: 50,
  fill: (0, 10), //fill alpha no effect
};

function setup() {
  createCanvas(400, 400);
  noStroke();
  // frameRate(20);
}

function draw() {
  //map(value, start1, stop1, start2, stop2, [withinBounds])

  background(0);
  fill(bb.x, 0, bb.y);
  circle(bb.x, bb.y, bb.radius * 2);
 
  moveIt();
  cornerBounce();
}

/******** functions ***********************/

function cornerBounce() 
// inverts x and y speed at corners
{
  if (bb.x >= width - bb.radius || bb.x <= bb.radius) {
    bb.xspeed = -bb.xspeed;
  }
  if (bb.y >= height - bb.radius || bb.y - bb.radius <= 0) {
    bb.yspeed = -bb.yspeed;
  }
}

function moveIt() 
// moves the ball in x,y
{
  bb.x = bb.x + bb.xspeed;
  bb.y = bb.y + bb.yspeed;
}
