/* Wk3 assignment 2 v1 */

// globals
let bg = 0;
let circlegray = 255;
//let brushR, brushG, brushB, Abrush;
let diam = 200;
let frozenx = frozeny = 200;
let increment = 2; 

//paint brush globals
let brushx = 50;
let brushy = 200;
brushR = 128;


function setup() {
  // createCanvas(400, 400);
frameRate(10);
  // background(255);
  


function draw() {
  /*** backround rectangle changes ***/
  fill(bg,128); //fill(gray,[alpha])
  rect(0,0,width,height);
  // rectangle at location 0,0 
  //with canvas width and height
  if (bg > 255 || bg < 0) {
    increment = -increment;
    // invert increment if white or black
  }
  bg = bg + increment;
  console.log("bg = " + bg);
  /*****************************************/

  // mapping inverse bg value to circle
  // fill(brushR,brushG,brushB,brushA)
  fill(circlegray,128);
  noStroke();
  circlegray = circlegray - increment;
  console.log("circlegray =" + circlegray);
  if (circlegray > 255 || circlegray < 0) {
  }
  // challenge do same thing with map
  // if (mouseIsPressed) {
  //   circle(mouseX, mouseY, diam);
  //   frozenx=mouseX; frozeny=mouseY;
  // }
  circle(frozenx,frozeny, diam);
  /*****************************************/
  
  // create small paintbrush with low alpha
  fill(brushR,0,0,128);
  circle(mouseX,mouseY,30);
  
}

/*** element different every time ***/
//you run the sketch
// use random

//https://editor.p5js.org/jht1493/sketches/L55nCCMds

