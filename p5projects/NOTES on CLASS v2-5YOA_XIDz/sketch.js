// NOTES on CLASS v2
class Booble {
  // Platonic form, cookie cutter used to make cookies
  // contains data and functions

  constructor(x,y,r) { //temporary constructor parameters have arbitrary names
    // a function definition inside the class
    // equivalent of the object's "setup"
    this.x = x; this.y = y; this.r = r;
    // this refers to the current object
  }
  move() {}
  show() {}
}

let booble;

function setup() {
  createCanvas(400, 400);

  booble = new Booble();
  // new is a function to construct an object
  // creates an object
  // which is an instance
  // cookie
}

function draw() {
  background(220);
}
