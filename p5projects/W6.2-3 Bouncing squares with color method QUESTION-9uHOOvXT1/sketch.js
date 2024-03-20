// W6.2-3 Bouncing squares with color method QUESTION
// https://editor.p5js.org/benjamin.bergery/sketches/9uHOOvXT1
// Added colorIt function to class
// QUESTION how do I get colors to work?

let bsquares = [];

function setup() {
  createCanvas(400, 400);

  // fill array with
  // new instances of Bsquare class

  for (let indy = 0; indy < 22; indy++) {
    let bradius = random(10, 70);
    let bspeed = random(0.5, 2);
    let xstart = random(bradius, width - bradius);
    let ystart = random(bradius, height - bradius);
    bsquares[indy] = new Bsquare(xstart, ystart, bradius, bspeed);
  }
}


function draw() {
  background(220);

  // for each (item of array)
  // run classInstance.classFunction()

  for (let bsquare of bsquares) {
    bsquare.bounceRandom();
  }
}

/*** CLASS ***/

class Bsquare {
  constructor(x, y, r, bsp) {
 
    /*** new property ***/
    this.color = random(128, 255);
  
    // this.color = (random(200,250),200,0); 
    // NO WORKY

    this.x = x;
    this.y = y;
    this.r = r;
    this.xsp = bsp; // xspeed
    this.ysp = bsp; // yspeed
  }

   bounceRandom() {
    this.move();
    this.show();
    this.colorIt();
  }

  /*** new function inside class ***/ 
  
  colorIt() {
    fill(this.color);
  }

  // display ball
  show() {
    stroke(100);
    strokeWeight(2);
    //  noFill();
    rect(this.x - this.r, this.y - this.r, this.r * 2);
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
//
//https://editor.p5js.org/benjamin.bergery/sketches/MB6gURy6E

//  SLINKY option in SetUp
// xstart = xstart + width/20;
// ystart = ystart + height/20;

// rect parameters needed tweeking
// to bounce correctly
//ellipse(this.x, this.y, this.r * 2);

/*** NOTES ********************/

// don't make UNNEEDED GLOBALS
// let xstart = 0; // don't need to be global
// let ystart = 0;
// let indy = 0;

// NOTE console.log SLOWS DOWN sketch !!!
