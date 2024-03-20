//W8.3-1 Rotate with push and pop
// Four images rotating with push and pop
//https://editor.p5js.org/benjamin.bergery/sketches/IL0GEbwEC

function preload() {
  pic = loadImage("AandE300p.png");
}

let angle = 0;
function setup() {
  angleMode(DEGREES);

  createCanvas(pic.width, pic.height);
  w = pic.width / 2;
  h = pic.height / 2;
  background(220);
  // image(pic, 0, 0, w, h);
  // translate(w, 0);
  // image(pic, 0, 0, w, h);
  // translate(-w, h);
  // image(pic, 0, 0, w, h);
  // translate(w, 0);
  // image(pic, 0, 0, w, h);
}

function draw() {
  push();
  rotate(-angle * 0.9);
  image(pic, 0, 0, w, h);
  angle = angle + 1;
  pop();
  push();
  translate(2 * w, 2 * h);
  rotate(-angle);
  image(pic, 0, 0, w, h);
  pop();
  push();
  translate(2*w,0);
  rotate(-angle*0.5);
  image(pic, 0, 0, w, h);
  pop();
  push();
  translate(0,2*h);
  rotate(-angle*0.7);
  image(pic, 0, 0, w, h);
  pop();
}

//https://editor.p5js.org/benjamin.bergery/sketches/VbmGb6bj9
