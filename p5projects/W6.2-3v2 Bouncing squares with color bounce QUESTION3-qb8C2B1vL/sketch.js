// W6.2-3v2 Bouncing squares with color bounce QUESTION3
// https://editor.p5js.org/benjamin.bergery/sketches/qb8C2B1vL
// QUESTION2 how do get color change at bounce? lines 85 and 93

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

    bsq = new Bsquare(xstart, ystart, bradius, bspeed);
    // helps to have unique name "bsq" for instance
    bsquares.push(bsq);
  }
}

function draw() {
  background(220);

  // for each (item of array)
  // run classInstance.classFunction()

  for (doodad of bsquares) {
    doodad.bounceRandom();
    //*** why is "doodad" arbitrary? instead of instance name "bsq" ***//
  }
}

/*** CLASS ***/

class Bsquare {
  constructor(x, y, r, bsp) {
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
      //  this.color = random(128, 255);
      // NO WORKY
    }

    // bounce y
    if (this.y >= height - this.r || this.y <= 0 + this.r) {
      this.ysp = -this.ysp;
      // this.color = random(128, 255);
      // NO WORKY
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

/*** QUESTION2 ********************/

// QUESTION2 how do get color change at bounce? lines 85 and 93
