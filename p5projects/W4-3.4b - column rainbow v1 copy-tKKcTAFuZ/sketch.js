// Wk-3-2 columns rainbow
// https://editor.p5js.org/benjamin.bergery/sketches/s7BBMA_9H

// PUT IN SETUP TO ONLY RUN NESTED LOOP ONCE

function setup() {
  createCanvas(400, 400);
  rainbowColumns();
}

function draw() {}
// empty draw function!

// Extra:Make every column a different color.
// ( Source: Mimi Yin)

function rainbowColumns() {
  for (
    let x = 0;
    x <= width;
    x += width / 20 )
    // in each column
    {
    fill(random(255), random(255), 255);
    // get random color
    rect(x, 0, width / 10, height);
    // draw a rectangle
  }
}
