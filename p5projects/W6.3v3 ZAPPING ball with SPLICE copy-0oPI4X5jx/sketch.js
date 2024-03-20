// EXTRA: After watching the videos on object communication (Coding Train Videos 7.6-7.7
//Part 1: Add a function to your Ball() class so that both balls change color if they collide.
// Part 2.: Take the ,question above and make the balls' color toggle, turning red when a ball comes close to another balll and then turning1 back to white when it comes close to another ball again.
//Part 3: Take Challenge .A and instead delete both balls when they come near each other. HINT: Beware of empty array positions!


let bballs = [];

function setup() {
  createCanvas(400, 400);

  // fill array with instances of Bball

  for (let indy = 0; indy < 3; indy++) {
    let bradius = random(40, 70);
    let bspeed = random(0.5, 2);
    let xstart = random(bradius, width - bradius);
    let ystart = random(bradius, height - bradius);
    bball = new Bball(xstart, ystart, bradius, bspeed);
    bballs.push(bball);
  }
}

function draw() {
  background(220);

  for (bball of bballs) {
    bball.bounceRandom();
    // instance.classFunction();
  }
}


function mousePressed() {
  for (bball of bballs) {
    bball.clicked(mouseX, mouseY);
    // this avoids having global variables mouseX,Y inside the class
  }
// bball.clicked has to be run for every bball, otherwise it would just be the last bball
}

/*** CLASS ********************/

class Bball {
  constructor(x, y, r, bsp) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xsp = bsp; // xspeed
    this.ysp = bsp; // yspeed
    this.brightness = 128;
  }

  //*** class function with SPLICE ***//
  clicked(mX, mY) {
    let d = dist(this.x, this.y, mX, mY);
    if (d < this.r) {
    bballs.splice(this,1);
    }
  }

  // meta function inside class
  bounceRandom() {
    this.move();
    this.show();
  }

  show() {
    stroke(random(200, 250), 100, 100);
    strokeWeight(3);
    // noFill();
        fill(this.brightness);
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {
    // move ball
    this.x = this.x + this.xsp;
    this.y = this.y + this.ysp;
    //// bounce x
    if (this.x >= width - this.r || this.x <= 0 + this.r) {
      this.xsp = -this.xsp;
    }
    ////// bounce y
    if (this.y >= height - this.r || this.y <= 0 + this.r) {
      this.ysp = -this.ysp;
    }
  }
}

/*******************************/
// based on my previous exercise https://editor.p5js.org/benjamin.bergery/sketches/WUlFUTdMe

/*** NOTES ********************/

// function mousePressed() {
//   for (bball of bballs) {
// bball.clicked has to be run for every bball, otherwise it would just be the last bball

// bball.clicked(mouseX, mouseY);  }}
    // this avoids having global variables mouseX,Y inside the class



