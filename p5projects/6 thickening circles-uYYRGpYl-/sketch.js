// 4-1 6 thickening circles

let icount = 1;
let istroke = 2;

function setup() {
  createCanvas(400, 400);

  for (let radius = 50; radius <= 300; radius += 70) {
    stroke(istroke);
    circle(width/2, height/2, radius);
    console.log("istroke = " + istroke);
    istroke = istroke * 4;
    // increase stroke
  }
}

function draw() {
  // background(220);
}
