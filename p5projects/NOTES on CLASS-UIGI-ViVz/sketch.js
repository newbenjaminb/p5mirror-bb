class Booble {
  // Platonic form, cookie cutter used to make cookies
  // contains data and functions

  constructor() {
    // a function definition inside the class
    // equivalent of the object's "setup"

    this.x = 300;
    this.y = 200;
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
