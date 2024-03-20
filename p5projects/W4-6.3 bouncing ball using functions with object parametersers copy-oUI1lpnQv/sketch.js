// W4-6.3 bouncing ball using functions with object parameters

var bb = { x: 200, y: 200,
  xspeed: 1, yspeed: 1,
  radius: 150, fill: (0, 10) };
var bb2 = { x: 150, y: 150,
  xspeed: 1, yspeed: 1,
  radius: 120, 
  fill: (255,128) }
let x_map= map(bb.x, 0, width , 50, 255);
let y_map= map(bb.y, height, 0, 50, 255);

function setup() {
  createCanvas(400, 400);
  noStroke(); //frameRate(20);
}

function draw() {
  
  background(220);
  fill(y_map, 0, x_map,128);
  circle(bb.x, bb.y, bb.radius * 2);
   fill(x_map, 0, y_map,128);
  circle(bb2.x, bb2.y, bb2.radius * 2);

  moveIt(bb);
  cornerBounce(bb);
  moveIt(bb2);
  cornerBounce(bb2);
}

/*** functions with object vars ***/
// re-using function with different object vars simplifies code
  
// using map to make width, height //correspond to 0-255 for blue, red values



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


//assigning js object to variable bb
// with different fields: x,y,yspeed...
// https://www.youtube.com/watch?v=-e5h4IGKZRY

// balls with object vars 
// and object functions
// unclear about why to use object vars
// versus classes?

//map(value, start1, stop1, start2, stop2, [withinBounds])
  //value Number: the incoming value to be converted
// using map here to make canvas width, height 
//correspond to 0-255 for blue, red values
// which makes canvas a slice of the color cube revealed by bouncing ball bb

