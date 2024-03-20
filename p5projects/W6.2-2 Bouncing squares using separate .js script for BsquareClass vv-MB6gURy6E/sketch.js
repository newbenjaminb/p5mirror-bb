// W6.2-2 Bouncing squares using separate .js script for BsquareClass
// https://editor.p5js.org/benjamin.bergery/sketches/MB6gURy6E

let bsquares = [];

function setup() {
  createCanvas(400, 400);

  // fill array with 
  // new instances of Bsquare class

  for (let indy = 0; indy < 22; indy++) {
    let bradius = random(10, 70);
    let bspeed = random(0.5, 1);
    let xstart = round(random(bradius, width - bradius));
    let ystart = round(random(bradius, height - bradius));
    bsquares[indy] = new Bsquare(xstart, ystart, bradius, bspeed);
  }
}

function draw() {
  background(220);

  for (let bsquare of bsquares) {
    bsquare.bounceRandom();
    // run ClassInstance.ClassFunction
  }
}

// /*** CLASS moved to external js file */

// class Bsquare {
//   constructor(x, y, r, bsp) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.xsp = bsp; // xspeed
//     this.ysp = bsp; // yspeed
//   }

//   // meta function inside class
//   bounceRandom() {
//     this.move();
//     this.show();
//   }

//   // display ball
//   show() {
//     // stroke(random(150,250),random(100,150),random(150,250));
//     stroke(random(200, 250), random(100, 150), random(150, 200));
//     strokeWeight(4);
//     noFill();
//     rect(this.x - this.r, this.y - this.r, this.r * 2);
//     // rect parameters needed tweeking
//     // to bounce correctly
//     //ellipse(this.x, this.y, this.r * 2);
//   }

//   // move and bounce ball
//   move() {
//     // move ball
//     this.x = this.x + this.xsp;
//     this.y = this.y + this.ysp;

//     // bounce x
//     if (this.x >= width - this.r || this.x <= 0 + this.r) {
//       this.xsp = -this.xsp;
//     }

//     // bounce y
//     if (this.y >= height - this.r || this.y <= 0 + this.r) {
//       this.ysp = -this.ysp;
//     }
//   }
// }

let poemLines = [
  "Like a kettle",
  "Percolate",
  "Like a dagger",
  "Perforate",
  "Like a doctor",
  "Resuscitate",
  "Like a stream",
  "Irrigate",
  "Like a vitamin",
  "Invigorate",
  "Like an idea",
  "Rehabilitate",
  "Like a gong",
  "Resonate",
  "Like a mime",
  "Imitate",
  "Like an author",
  "Dedicate",
  "Like a cow",
  "Lactate",
  "Like a gong",
  "Resonate",
  "Like a song",
  "Celebrate",
];
/*******************************/
// based on my previous exercise https://editor.p5js.org/benjamin.bergery/sketches/WUlFUTdMe

//  SLINKY option in SetUp
// xstart = xstart + width/20;
// ystart = ystart + height/20;

/*** NOTES ********************/

// don't make UNNEEDED GLOBALS

/*** CLASS moved to external js file */
