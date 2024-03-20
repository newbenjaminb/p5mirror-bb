// NOTES ClassArray v3

// mix classes and arrays by class instances in an array
MyArray = [instance0, instance1, instance2] ;
class Instance { constructor(parameter1,p2,p3) {
p4 = 30;}
}

// fill the array with an array-index for loop 
// for (let i=0; i <array.length; i++) { instancei = new Instance();

}

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
