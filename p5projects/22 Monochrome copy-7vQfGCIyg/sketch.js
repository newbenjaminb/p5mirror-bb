// How does, how you feel change as the colors change?
// When does it feel most like a natural horizon?

// Saturation
let s1, s2;
let s1speed, s2speed;


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
  s1 = 49;
  s2 = 51;
  s1speed = 0.1;
  s2speed = 0.2;
}

function draw() {
  // Change the saturation
  s1 += s1speed;
  s2 += s2speed;
  
  // Bounce the saturation back and forth
  s1speed = bounce(s1, 10, 100, s1speed);
  s2speed = bounce(s2, 10, 100, s2speed);

  // Top half
  fill(180, s1, 50);
  rect(width / 2, height / 4, width, height / 2);
  
  // Bottom half
  fill(180, s2, 50);
  rect(width / 2, 3 * height / 4, width, height / 2);

}

function bounce(pos, low, high, speed) {
  if (pos < low || pos > high) {
    speed *= -1;
    return speed;
  }
  return speed;
}

// https://editor.p5js.org/icm4.0/sketches/X078yn_i8