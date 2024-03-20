// W4-6.4 GRAY LAVA LAMP using functions with object parameters
//https://editor.p5js.org/benjamin.bergery/sketches/WUlFUTdMe
// brushes are object vars 
// movement functions have object parameters 
// QUESTION unclear about why to use object vars versus classes?

var bb = {
  x: 200,
  y: 200,
  xspeed: 4,
  yspeed: 3,
  radius: 30,
  fill: (0, 10), //fill alpha no effect?
};

var bb2 = {
  x: 100,
  y: 150,
  xspeed: 3,
  yspeed: 4,
  radius: 40,
  fill: (0, 10), //fill alpha no effect 
}
//assigning js object to variable bb
// with different fields: x,y,yspeed...
// https://www.youtube.com/watch?v=-e5h4IGKZRY

function setup() {
  createCanvas(400, 400);
  noStroke();
  frameRate(30);
}

function draw() {
  
let yToGray = map(bb.y, height, 0, 128, 255);
// using map to make width, height //correspond to 128-255 gray values

  //background(220);
  fill(yToGray,50);
  // fill(yToRed, 0, xToBlue);
  circle(bb.x, bb.y, bb.radius * 2);
  circle(bb2.x, bb2.y, bb2.radius * 2);

  moveIt(bb);
  cornerBounce(bb);
  moveIt(bb2);
  cornerBounce(bb2);
}

/** functions with object var parameter **/
// re-using function with object var parameters simplifies code

function moveIt(brush) {
  // moves the brush in x,y
  brush.x = brush.x + brush.xspeed;
  brush.y = brush.y + brush.yspeed;
}

function cornerBounce(brush) {
  // inverts x and y speed at corners
  if (brush.x >= width - brush.radius || brush.x <= brush.radius) {
    brush.xspeed = -brush.xspeed;
  }
  if (brush.y >= height - brush.radius || brush.y - brush.radius <= 0) {
    brush.yspeed = -brush.yspeed;
  }
}

console.log("moveIt(bb);cornerBounce(bb);")
console.log("moveIt(bb2);cornerBounce(bb2);")

//map(value, start1, stop1, start2, stop2, [withinBounds])
  //value Number: the incoming value to be converted
// using map here to make canvas width, height 
//correspond to gray 
