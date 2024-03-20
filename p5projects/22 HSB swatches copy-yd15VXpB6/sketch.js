// Resize the window and make sure you can see all 18 swatches of color.

// Which colors stick out?
// Which colors have more weight?
// How many groups of colors do you see? 1, 2, 4, 6, 18?
// Are the groups even in size?
// Can you identify the brightest swatch of each group?

// Click the mouse to activate the animation.
// Clap your hands whenever you see the brightest swatch of each group come into view on the right edge of the canvas.
// Do you feel the syncopation?

let off = 0;
let move = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw(){
  // Grow the offset
  if(move) off+=2;
  
   // Draw 12 swatches of color
  for (let i = 0; i < 12; i++) {
    // Calculate hue based on angle between colors
    // 360/12 is the angle between colors
    let h = off +  i * 360/12;
    // Wrap around the circle
    h%=360;
    // Calculate x-position of swatch
    let x = i * width / 12;
    // Draw rect
    fill(h, 100, 100);
    rect(x, 0, width / 12, height);
  } 
}

function mousePressed(){
  move = !move;
}

