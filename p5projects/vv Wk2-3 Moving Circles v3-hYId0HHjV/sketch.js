 //Challenge: Re-write the algorithm so that you can change the speed and direction independently of one another. Meaning you can update just the speed for all the circles by changing one number and 
//switch the direction for all the circles by changing a different number.
// stumped

let canvasxy = 400;
let circle1x = canvasxy / 2;
let circle1y = canvasxy / 2;
let circle2x = canvasxy / 2;
let circle2y = canvasxy / 2;
let circle3x= canvasxy / 2;
let circle3y= canvasxy / 2;
let circle4x= canvasxy / 2;
let circle4y= canvasxy / 2;

let circle5x= canvasxy /2 ;
let circle5y= canvasxy/2;

let speedb = 4;
let dir = 1;

// make these variables global by placing them outside the 2 functions
function setup() {
  createCanvas(canvasxy, canvasxy);
  background(220);
  console.log("Moving Circles");
}

function draw() {
  //Part 1: Move a circle from the middle of the screen to the right side of the screen
 background(220);
  
// RED
  fill(220,0,0);
  circle(circle1x, circle1y, 30);
  //circle(x, y, d)
  circle1x= circle1x + (speedb*dir);

  if (circle1x > canvasxy) {
    circle1x = canvasxy ;
  }

// Part 2: Add 3 more, 1 moving left, 1 moving up, 1 moving down

// BLUE
  fill(0,0,220) 
  circle(circle2x, circle2y, 30); 
 circle2x = circle2x - (speedb*dir);
   if (circle2x < 0) {
    circle2x = 0 ;
  } 
  
fill(0,220,0) 
  circle(circle3x, circle3y, 30); 
 circle3y = circle3y - (speedb*dir);
   if (circle3y < 0) {
    circle3y = 0 ;
  } 
  
  fill(0,220,220) 
  circle(circle4x, circle4y, 30); 
 circle4y = circle4y + (speedb*dir);
   if (circle4y > canvasxy) {
    circle4y = canvasxy ;
  } 

 //Part 3: Add 4 more, 1 moving towards each of the 4 corners of the canvas.

  fill(220,0,220) 
  circle(circle5x, circle5y, 30); 
 circle5x = circle5x - (speedb*dir);
  circle5y = circle5y - (speedb*dir);
   if (circle5x < 0) {
    circle5x = 0 ;
     circle5y = 0;
  } 

    fill(220,0,220) 
  circle(circle5x, circle5y, 30); 
 circle5x = circle5x - (speedb*dir);
  circle5y = circle5y - (speedb*dir);
   if (circle5x < 0) {
    circle5x = 0 ;
     circle5y = 0;
  } 


 
  
}



