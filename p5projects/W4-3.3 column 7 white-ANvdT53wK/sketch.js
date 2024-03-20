// 3.2 7th column white
// https://editor.p5js.org/benjamin.bergery/sketches/ANvdT53wK

let x; 
// global var for use in external function

function setup() {
  createCanvas(400, 400);

  for (
    x = 0;
    x <= width;
    x += width / 20 // in each column
  ) 
  {
    fill(0, 128, 255);
    // set color to blue
    if (x >= 120 && x < 140) {
    columnWhite();
    }
    if (x >= width / 2) {
    // select right half
    fill(255, 0, 0); // red
    }

    rect(x, 0, width / 20, height);
    // 20 tall rectangles
  }
}

function columnWhite() {
      console.log("x = " + x);
      fill(255, 255, 255);
      rect(140, 0, 20 / 10, height);
      // make column white
}

// function draw() {}
// don't need draw function !
