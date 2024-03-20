// W6.2-2 Bouncing words inprogress
// https://editor.p5js.org/benjamin.bergery/sketches/Su-kanfYy


let bthings = [];

function setup() {
  createCanvas(400, 400);

  // fill array w/ new instances of Class

  for (let indy = 0; indy < poemLines.length; indy++) {
    let bradius = random(10, 70);
    let bspeed = random(0.5, 2);
    let xstart = (random(bradius, width - bradius));
    let ystart = (random(bradius, height - bradius));
    bthings[indy] = new Bthing(xstart, ystart, bradius, bspeed);
  }
}

function draw() {
  background(220);

  // for (let item of array)
  for (let bthing of bthings) {
    bthing.bounceRandom();
    // run class.function
  }
}

/*** CLASS ********************/

class Bthing {
  constructor(x, y, r, bsp) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xsp = bsp; // xspeed
    this.ysp = bsp; // yspeed
    this.gray = random(128,256);
  }

  // meta function inside class
  bounceRandom() {
    this.move();
    this.show();
    // this.colorBounce();
  }

  // display ball
  show() {
    stroke(random(200, 250), random(100, 150), random(150, 200));
    strokeWeight(4);
    fill(this.gray);
    rect(this.x - this.r, this.y - this.r, this.r * 4,this.r*2);
    
    // rect parameters needed tweeking
    // to bounce correctly
  }

  // move and bounce 
  move() {
    // move 
    this.x = this.x + this.xsp;
    this.y = this.y + this.ysp;

     //bounce x
    if (this.x >= width) {
      this.x = this.r;
    }

    //bounce x
    // if (this.x <= width - this.r || this.x <= 0 + this.r) {
    //   this.x = this.x+width;
    // }

    // bounce y
    if (this.y >= height - this.r || this.y <= 0 + this.r) {
      this.ysp = -this.ysp;
    }
  }
  

 
}



let poemLines = [
  "Like a guru",
  "Meditate",
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
  "Like a wine",
  "Inebriate",
  "Like an author",
  "Dedicate",
  "Like a gong",
  "Resonate",
  "Like a poem",
  "Celebrate",
];
/*******************************/
// based on my previous exercise https://editor.p5js.org/benjamin.bergery/sketches/WUlFUTdMe

   // stroke(random(150,250),random(100,150),random(150,250));

/*** NOTES ********************/

// don't make UNNEEDED GLOBALS
// let xstart = 0; // don't need to be global
// let ystart = 0;
// let indy = 0;

// NOTE console.log SLOWS DOWN sketch !!!
