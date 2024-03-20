// How many groups of colors do you see?
// How do the groupings change?
//https://editor.p5js.org/benjamin.bergery/sketches/HKduu_l17


// Angles between swatches
// Angle between swatches 1 and 2 and 3 and 0
let xa = 180;
// Angle between swatches 0 and 1 and 2 and 3
let ya = 0;
let xaspeed = -0.1;
let yaspeed = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  background(220);
  
  // Move the angles between colors
  xa+=xaspeed;
  ya+=yaspeed;
  
  xaspeed = bounce(xa, 0, 180, xaspeed);
  yaspeed = bounce(ya, 0, 180, yaspeed);
  
  // Hue
  let h = 0;

  // Recalculate hue every frame
  // Draw 4 swatches
  for (let i = 0; i < 4; i++) {
    let a;
    // Swatches 0 and 2 use ya
    // Swatches 1 and 3 use xa
    if(i == 0 ) a = ya/2;
    else if(i == 1) a = xa;
    else if(i == 2) a = ya;
    else a = xa;
    h += a;
    h%=360;
    fill(h, 100, 100);
    let x = i * width / 4;
    rect(x, 0, width / 4, height);
  }
}

function bounce(a, low, high, speed) {
  if (a < low || a > high) {
    speed *= -1;
    return speed;
  }
  return speed;
}

//https://editor.p5js.org/icm4.0/sketches/ucut8DFyV