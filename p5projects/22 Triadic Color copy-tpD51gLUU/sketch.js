// https://editor.p5js.org/benjamin.bergery/sketches/tpD51gLUU
// Do you feel the rhythm?
// The two right columns are moving through the color wheel at the same speed, but there is still syncopation.
// That has to do with the way perceive change in hue.


let a = 30;
let aspeed = 0.25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  background(220);
  a += aspeed;
  aspeed = bounce(a, 0, 360, aspeed);
  
  for (let i = 0; i < 3; i++) {
    let h = i * a;
    h %= 360;
    fill(h, 100, 100);
    let x = i * width / 3;
    rect(x, 0, width / 3, height);
  }
}

function bounce(pos, low, high, speed) {
  if (pos < low || pos > high) {
    speed *= -1;
    return speed;
  }
  return speed;
}
// https://editor.p5js.org/icm4.0/sketches/gBq79IWtw