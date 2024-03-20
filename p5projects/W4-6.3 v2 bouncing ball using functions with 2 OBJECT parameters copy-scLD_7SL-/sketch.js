// W4-6.3 v2 bouncing ball using functions with object parameters
// unclear about why to use object literal vars
// versus classes?

var bb = {
  // literal object w/ fields
  x: 200,
  y: 200,
  xspeed: 4,
  yspeed: 3,
  radius: 50,
};

var bb2 = {
  x: 100,
  y: 150,
  xspeed: 3,
  yspeed: 4,
  radius: 40,
};

function setup() {
  createCanvas(400, 300);
  noStroke();
  frameRate(30);
}

function draw() {
  let xMapsGray = map(bb.x, 0, width, 50, 255);
  let xMapsBlue = map(bb2.x,width,50,255);
  let yMapsGray = map(bb2.y, height, 0, 50, 255);

  background(220);
  fill(xMapsGray);
  circle(bb.x, bb.y, bb.radius * 2);
    fill(yMapsGray);
  circle(bb2.x, bb2.y, bb2.radius * 2);

  moveIt(bb); 
  cornerBounce(bb);
  moveIt(bb2);
  cornerBounce(bb2);
}

// functions with object var parameter //

function moveIt(ball) {
  // moves the ball in x,y
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

function cornerBounce(ball) {
  // inverts x and y speed at corners
  if (ball.x >= width - ball.radius || ball.x <= ball.radius) {
    ball.xspeed = -ball.xspeed;
  }
  if (ball.y >= height - ball.radius || ball.y - ball.radius <= 0) {
    ball.yspeed = -ball.yspeed;
  }
}

// NOTES
//assigning js object to variable bb

//map(value, start1, stop1, start2, stop2, [withinBounds])
//value Number: the incoming value to be converted
// using map here to make canvas width, height
//correspond to 0-255 for blue, red values
// which makes canvas a slice of the color cube revealed by bouncing ball bb

// with different fields: x,y,yspeed...
// https://www.youtube.com/watch?v=-e5h4IGKZRY

// re-using function with different object vars simplifies code
