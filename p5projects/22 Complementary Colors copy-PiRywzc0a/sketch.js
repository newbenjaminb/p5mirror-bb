// Stare at just the red swatch, does it ever change?
// Where do you like it the best? 
// https://editor.p5js.org/benjamin.bergery/sketches/PiRywzc0a

let a = 0;
let aspeed = 0.25;
let isLoop = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  background(220);
  // Change angle between colors
  a += aspeed;
  // Bounce angle back and forth between 0 and 180
  aspeed = bounce(a, 0, 360, aspeed);
  
  // Draw 2 swatches of color
  for (let i = 0; i < 2; i++) {
    // Calculate hue based on angle between colors
    let h = i * a;
    // Calculate x-position of swatch
    let x = i * width / 2;
    // Draw rect
    fill(h, 100, 100);
    rect(x, 0, width / 2, height);
  }
}

function bounce(a, low, high, speed) {
  if (a < low || a > high) {
    speed *= -1;
    return speed;
  }
  return speed;
}

// Pause sketch with keypress
function keyPressed() {
  isLoop = !isLoop;
  if (isLoop) loop();
  else noLoop();
}
// https://editor.p5js.org/icm4.0/sketches/Xm4F9kwKi