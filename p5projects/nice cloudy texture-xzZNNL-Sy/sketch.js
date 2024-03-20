function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  // background(220);
  bshow();
}

function bshow() {
  noFill(); noStroke()
  fill(255,10);
ellipse(random(0,400),random(0,400),random(1,100));
   
}