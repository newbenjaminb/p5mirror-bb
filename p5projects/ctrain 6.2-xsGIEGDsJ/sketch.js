// ctrain 6.2

let bubble1; let bubble2; //declaring instance

function setup() {
  createCanvas(400, 400);
  bubble1 = new Bubble(); bubble2 = new Bubble();
  // console.log(bubble2.x, bubble2.y);
}

function draw() {
  background(0);  // function inside class
 bubble1.move; bubble1.show;  
  console.log(bubble2.x, bubble2.y); // print=console.log
}

class Bubble {
  constructor(x,y,r) {
    this.x = 20; this.y = 20;
  }
  move() { //inside the class, no need to say function 
    this.x = this.x + random(-5,5); this.y = this.y + random(-5,5);
    console.log('inside Bubble class move');
  }  
  show() {
    stroke(255); strokeWeight(3); noFill();
    ellipse(this.x,this.y,24,24);
  }
}