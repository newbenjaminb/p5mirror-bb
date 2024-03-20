let w, h, a, aspeed;
let diam;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  diam = width/2;
  w = diam;
  h = 0;
  a = 0;
  aspeed = 0.01;
}

function draw() {
  background('red');
  
  a+=aspeed;
  w = sin(a)*diam;
  h = cos(a)*diam;
    
  noStroke();
  fill('white');
  ellipse(width/2, height/2, diam, diam);
  noFill();
  stroke('red');
  rect(width/2, height/2, w, h);
}

function bounce(a, low, high, speed) {
  if (a < low || a > high) {
    speed *= -1;
    return speed;
  }
  return speed;
}

//https://editor.p5js.org/icm4.0/sketches/nNBavXsZj