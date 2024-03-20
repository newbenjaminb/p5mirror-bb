let x, y, r, g, b, a;
let growth;
// xy center of circle
// rgb and alpha

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  //x = random(0, 400);
  /**********************/
  x = y =200;
  /**********************/
  //y = random(0, 400);
  r = random(200, 255);
  g = 0;
  b = random(200, 255);
  a = random(200, 255); // alpha is 0-255
  //growth = random(0, 10);
  growth=5;

  noStroke(); //no outline
  //stroke(1)
  fill(r, g, b, a); //put color before circle
  circle(x, y, 30 * growth);
  circle(x, y, 30 * growth + 15);
  circle(x, y, 30 * growth + 40);

  console.log(" x=" + x);
}
