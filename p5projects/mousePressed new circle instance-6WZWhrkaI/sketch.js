//mousePressed new circle instance
// https://editor.p5js.org/benjamin.bergery/sketches/6WZWhrkaI

let cercles = [];

function setup() {
  createCanvas(600, 400);
}

function mousePressed() {
  let r = random(10, 100);
  let b = new Cercle(mouseX, mouseY, r);
  cercles.push(b);
}

function draw() {
  background(128);

  for (let cercle of cercles) {
    cercle.move();
    cercle.show();
  }
}


class Cercle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xsp = random(-2, 2); // xspeed
    this.ysp = random(-2, 2) // yspeed
  }

  move() {
    this.x = this.x + this.xsp;
    this.y = this.y + this.ysp;
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
}

// https://youtu.be/fBqaA7zRO58
// https://editor.p5js.org/codingtrain/sketches/1y_xfueO
