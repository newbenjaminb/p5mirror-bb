let x, y, r, g, b, a;
let growth;
// xy center of circle
// rgb and alpha

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  x = random(0, 400);
  y = random(0, 400);
  r = random(0, 128);
  g = 0;
  b = random(0, 255);
  a = random(50, 255); // alpha is 0-255
  growth=random(0,2)
  
  noStroke(); //no outline
  //stroke(1)
  fill(r, g, b, a); //put color before circle
  circle(x, y, 30*growth);
  console.log("growth = " + growth + " alpha=" + a);
}
