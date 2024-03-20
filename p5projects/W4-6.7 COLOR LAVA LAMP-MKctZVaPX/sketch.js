// W4-6.7 COLOR LAVA LAMP 
// https://editor.p5js.org/benjamin.bergery/sketches/MKctZVaPX
// QUESTION unclear about why to use object vars versus class?

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

var bb3 = {
  x: 150,
  y: 100,
  xspeed: 3,
  yspeed: 2,
  radius: 45,
  fill: (0, 10), //fill alpha no effect 
}


function setup() {
  createCanvas(400, 400);
  noStroke();
  frameRate(20);
}

function draw() {
  
let yToGray = map(bb.y, height, 0, 200, 255);
// using map to make brush height //correspond to 128-255 gray values

  //background(220);
  //fill(yToGray,50);
  // define gray value of all brushes 
  // fill(yToRed, 0, xToBlue);
  
    fill(yToGray,0,0,50);
  circle(bb.x, bb.y, bb.radius * 2);
    fill(0,yToGray,0,30);
  circle(bb2.x, bb2.y, bb2.radius * 2);
    fill(0,0,yToGray,20);
  circle(bb3.x, bb3.y, bb3.radius * 2);
  
  moveIt(bb);
  cornerBounce(bb);
  moveIt(bb2);
  cornerBounce(bb2);
  moveIt(bb3);
  cornerBounce(bb3);
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

//console.log("moveIt(bb);cornerBounce(bb);")
console.log("doesn't work as a piece")

//map(value, start1, stop1, start2, stop2, [withinBounds])
  //value Number: the incoming value to be converted
// using map here to make canvas width, height 
//correspond to gray 

// brushes are object vars 
// movement functions have object parameters 
