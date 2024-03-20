let bubble1;let bubble2;

function setup() {
  createCanvas(400, 400);
  bubble1 = new Bubble(); 
  bubble2 = new Bubble();
}

function draw() {
     background(0); 
  stroke(255);strokeWeight(4);noFill();
  // ellipse(20,20,24,24);
 bubble1.move; bubble1.show;
  bubble2.move;bubble2.show;
}

class Bubble {
  constructor() {
    this.x = 20; this.y = 20;
  }
  // move() {
  //   this.x = this.x + random(-5,5);
  // }
  show() {
    stroke(255);strokeWeight(4); 
    noFill();
    ellipse(this.x,this.y,24,24);
    console.log('inside show');
  }
}