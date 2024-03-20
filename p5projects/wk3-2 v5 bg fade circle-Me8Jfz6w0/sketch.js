/* Wk3 assignment 2 v1 */

// bg globals
let bg = 0;
let increment = 2;

//paint brush globals
let brushgray = 255;
let brushR, brushG, brushB, Abrush;
let diam = 200;
let frozenx = frozeny = 200;

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  /*** backround changes ***/
  background(bg);
  if (bg > 128 || bg < 0) {
    increment = -increment;
    // invert increment if white or black
  }
  bg = bg + increment;
  console.log("bg = " + bg);
  /*****************************************/

  /*** element controlled by mouse ***/
  // mapping inverse bg value to circle
  // fill(brushR,brushG,brushB,brushA)
  fill(brushgray);
  noStroke();
  brushgray = brushgray - increment;
  console.log("brushgray =" + brushgray);
  if (brushgray > 255 || brushgray < 0) {
  }
  // challenge do same thing with map
  if (mouseIsPressed) {
    circle(mouseX, mouseY, diam);
    frozenx=mouseX; frozeny=mouseY;
  }
  circle(frozenx,frozeny, diam);
  /*****************************************/
}

/*** element different every time ***/
//you run the sketch
// use random
