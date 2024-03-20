//W5.4 From the video tutorial use the sketch: Function Basics - bouncing1 ball
// https://editor.p5js.org/codingtrain/sketches/omHOuJY1
// Add more bouncing balls (a least one) using parameter variables. 

let ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
};
let ball1 = {
  x: 200,
  y: 300,
  xspeed: 4,
  yspeed: -3
};

function setup() {
  createCanvas(400,300);
}

function draw() {
  background(0);
  move_ball(ball);
  move_ball(ball1);
  bounce();
  display();
}

function move_ball(ball) {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }

  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function display() {
  stroke(255);
  strokeWeight(4);
  fill(200, 0, 200);
  ellipse(ball.x, ball.y, 24, 24);
}

function move_ball() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}
//renamed to avoid conflict with
//p5js reserved function "move"

