// What makes a color feel heavy or light?
// Which is heavier, top or bottom?
// Raise your right hand for top
// Raise your left hand for bottom


// Saturation values for background
// And 2 foreground swatches
let bgs, fgs1, fgs2;
// Speeds to change saturation values
// for background and foregrounds
let bgsspeed, fgs1speed, fgs2speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
  // Initializing values
  // Foregrounds start with same values
  bgs = 10;
  bgsspeed = 0.1;
  fgs1 = 0;
  fgs2 = 0;
  fgs1speed = 0.1;
  fgs2speed = 0.2;

}



function draw() {
  
  // Update background saturation
  bgs += bgsspeed;
  bgsspeed = bounce(bgs, 0, 100, bgsspeed);
  
  // Update top foreground saturation
  fgs1 += fgs1speed;
  fgs1speed = bounce(fgs1, 0, 100, fgs1speed);

  // Update bottom foreground saturation
  fgs2 += fgs2speed;  
  fgs2speed = bounce(fgs2, 0, 100, fgs2speed);


  // Background
  background(30, bgs, 100);

  // Draw top foreground
  fill(30, fgs1, 100);
  rect(width / 2, height / 4, width / 6, height / 6);
  
  // Draw bottom foreground
  fill(30, fgs2, 100);
  rect(width / 2, 3 * height / 4, width / 6, height / 6);

}

function bounce(pos, low, high, speed) {
  if (pos < low || pos > high) {
    speed *= -1;
    return speed;
  }
  return speed;
}

//https://editor.p5js.org/icm4.0/sketches/I350DOnIs