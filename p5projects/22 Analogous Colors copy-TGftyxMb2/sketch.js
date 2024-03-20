// Are certain sets of analogous colors more similar to each other than others?

// Offset angle for first color
let off = 0;

// Fall Colors
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  background(220);
  // Increase the offset color
  off+=0.5;
  
  // Draw 3 swatches
  for (let i = 0; i < 3; i++) {
    // Calculate hue, 30-degrees apart + offset
    let h = off + i * 30;
    // Wrap around when you hit 360 back to 0
    h%=360;
    // Calculate x-position of swatch
    let x = i * width / 3;
    // Draw swatch
    fill(h, 100, 67);
    rect(x, 0, width / 3, height);
  }
}

