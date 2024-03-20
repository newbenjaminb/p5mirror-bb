/*
Dynamically generated Josef Albers squares
https://en.wikipedia.org/wiki/Josef_Albers
*/

// Objects to store rgb values for bg and fg
// bgspeed and fgspeed
let bg = { r: 0, g: 0, b: 0 };
let fg = { r: 0, g: 0, b: 0 };
let bgspeed = { r: 1, g: .33, b: .67 };
let fgspeed = { r: .33, g: .67, b: 1 };

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  
  // Update background color
  bg.r += bgspeed.r;
  bg.g += bgspeed.g;
  bg.b += bgspeed.r;
  
  // Update foreground color
  fg.r += fgspeed.r;
  fg.g += fgspeed.g;
  fg.b += fgspeed.r;
  
  // Turn around colors
  if(bg.r < 0 || bg.r > 255 ) bgspeed.r *= -1;
  if(bg.g < 0 || bg.g > 255 ) bgspeed.g *= -1;
  if(bg.b < 0 || bg.b > 255 ) bgspeed.b *= -1;

  if(fg.r < 0 || fg.r > 255 ) fgspeed.r *= -1;
  if(fg.g < 0 || fg.g > 255 ) fgspeed.g *= -1;
  if(fg.b < 0 || fg.b > 255 ) fgspeed.b *= -1;
  
  // Draw background and foreground
  background(bg.r, bg.g, bg.b);
  fill(fg.r, fg.g, fg.b);
  rect(width/2, height/2, width/2, height/2);
}
//https://editor.p5js.org/icm4.0/sketches/0dU1IiYo7