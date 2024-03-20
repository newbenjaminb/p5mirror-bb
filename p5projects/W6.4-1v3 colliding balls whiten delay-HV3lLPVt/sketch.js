// W6.4-1v3 colliding balls whiten delay
// https://editor.p5js.org/benjamin.bergery/sketches/T9sgI1OGl

let bballs = [];

function setup() {
  createCanvas(400, 400);

  // fill array with new instances of Bball

  for (let indy = 0; indy < 3; indy++) {
    let bradius = random(40, 50);
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
    
    for (let other of bballs) {
      if (other !== bball && bball.intersectsBool(other)) {
        console.log("intersection");
        bball.colorWhite();
      }
      // else {bball.brightness = 0;}
    }
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
    this.brightness = 128;
  }

  //*** new class functions ***//
  
  intersectsBool(other) {
    let d = (this.x, this.y, other.x, other.y);
    // return true;
    return (d < this.r + other.r);
  }

  colorWhite() {
      this.brightness = 255;
    }

  //*** old class functions ***//

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

// clicked(mX, mY) {
//   let d = dist(this.x, this.y, mX, mY);
//   if (d < this.r) {
//     // ball clicked);
//     if (this.brightness == 0) {
//       this.brightness = 255;
//     } else {
//       this.brightness = 0;
//     }
//   }
// }

//*** change color ***//
// changeColor() {
//   if (this.brightness == 0) {
//     this.brightness = 255;
//   } else {
//     this.brightness = 0;
//   }
// }

/*** NOTES ********************/

// verbose
//if (d < this.r + other.r){
//    return true;
// }
// else { return false;}

// less verbose
//return = (d < this.r + other.r);

// Part 2.: Take the question above and make the balls' color toggle, turning red when a ball comes close to another ball and then turning back to white when it comes close to another ball again.
//Part 3: Take Challenge .A and instead delete both balls when they come near each other. HINT: Beware of empty array positions!
