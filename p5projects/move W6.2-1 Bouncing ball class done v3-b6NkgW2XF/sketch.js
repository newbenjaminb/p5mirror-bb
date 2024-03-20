// W6.2-1 Bouncing ball class done v3
// https://editor.p5js.org/benjamin.bergery/sketches/b6NkgW2XF
// NOTE console.log SLOWS DOWN sketch !!!
// fixed balls partially outside canvas with bradius variable


let bballs = [];

function setup() {
  createCanvas(400, 400);

  // fill array with new instances of Bball
  let bradius = 30;
  for (let indy = 0; indy < 20; indy++) {
    let xstart = round(random(bradius, width - bradius));
    let ystart = round(random(bradius, height - bradius));
    bballs[indy] = new Bball(xstart, ystart, bradius, 5);
  }
}

function draw() {
  background(220);

  // move and display each instance
  for (let indie = 0; indie < bballs.length; indie++) {
    bballs[indie].move();
    bballs[indie].show();
  }
}

/*** CLASS ********************/

class Bball {
  constructor(x, y, r, bsp) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xsp = bsp; // xspeed
    this.ysp = bsp; // yspeed
  }

  // display ball
  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }

  // move and bounce ball
  move() {
    // move ball
    this.x = this.x + this.xsp;
    this.y = this.y + this.ysp;

    // bounce x
    if (this.x >= width - this.r || this.x <= 0 + this.r) {
      this.xsp = -this.xsp;
    }

    // bounce y
    if (this.y >= height - this.r || this.y <= 0 + this.r) {
      this.ysp = -this.ysp;
    }
  }
}

/*******************************/
// https://editor.p5js.org/benjamin.bergery/sketches/WUlFUTdMe
//   cornerBounce() {
//   }

// cornerBounce(brush) {
//   // inverts x and y speed at corners
//   if (brush.x >= width - brush.radius || brush.x <= brush.radius) {
//     brush.xspeed = -brush.xspeed;
//   }
//   if (brush.y >= height - brush.radius || brush.y - brush.radius <= 0) {
//     brush.yspeed = -brush.yspeed;
//   }

// https://editor.p5js.org/codingtrain/sketches/1y_xfueO
// for (let i = 0; i < bubbles.length; i++) {
//   bubbles[i].move();
//   bubbles[i].show();
// }

//   console.log("this.y", this.y);

//  SLINKY option in SetUp
    // xstart = xstart + width/20;
    // ystart = ystart + height/20;


/*** NOTES ********************/

// don't make UNNEEDED GLOBALS 
// let xstart = 0; // don't need to be global
// let ystart = 0;
// let indy = 0; 

