// lin versus log
// Which gradient is more even?
// Where are there unnatural jumps?
// Is either one perfect?

let numSwatches = 11;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  background(220);
  
  // Draw 10 swatches
  let swWidth = width/numSwatches;
  for (let sw = 0; sw < numSwatches; sw++) {
    // Calculate brightness linearly
    // Each swatch is 10% brighter
    let b = sw*10;
    // Calculate x-position of swatch
    let x = sw * swWidth;
    // Draw the swatch
    fill(0, 0, b);
    rect(x, 0, swWidth, height/2);
  }
  
  // Draw 10 swatches
  for (let sw = 0; sw < numSwatches; sw++) {    
    // Calculate brightness with log()
    let b = sw*log(sw + 1)*4.5;
    // WHY 4.5 ?
    // Calculate x-position of swatch
    let x = sw * swWidth;
    // Draw the swatch
    fill(0, 0, b);
    rect(x, height/2, swWidth, height);
  }
}

//https://editor.p5js.org/icm4.0/sketches/odxgnNuYs
