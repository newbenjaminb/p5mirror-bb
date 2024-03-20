// W5.2 Zoog as functions
// https://editor.p5js.org/benjamin.bergery/sketches/JYZXYruvZ

function setup() {
  createDrawingCanvas();
  dark_gray_background();
  addPurpleFace();
  addGreenEyes();
  addBlackPupils();
  addOrangeEyebrows();
  addAntenna();
  add_pink_mouth();
  addBlackArms();
  yellowBody();
}

//+++ external functions +++//

function createDrawingCanvas() {
  createCanvas(400, 400);
}

function dark_gray_background() {
  background(120);
}

function addPurpleFace() {
  fill(127, 0, 127);
  ellipse(200, 200, 150, 200);
}

function addGreenEyes() {
  fill(0, 200, 127);
  ellipse(150, 150, 70, 40);
  ellipse(250, 150, 40, 60);
}

function addBlackPupils() {
  fill(0);
  ellipse(170, 150, 5, 5);
  ellipse(270, 150, 10, 10);
}

function addOrangeEyebrows() {
  stroke(255, 100, 100);
  strokeWeight(15);
  line(130, 110, 170, 120);
  line(230, 105, 270, 100);
}

function addAntenna() {
  stroke(255);
  strokeWeight(5);
  line(200, 125, 200, 50);
  noFill();
  ellipse(200, 40, 20, 20);
}

function add_pink_mouth() {
  noStroke();
  fill(255, 0, 127);
  ellipse(200, 250, 50, 20);
}

function addBlackArms() {
  stroke(0);
  strokeWeight(30);
  line(150, 350, 300, 300);
}

function yellowBody() {
  // No stroke
  noStroke();
  fill(255, 255, 0);
  rect(150, 275, 100, 200);
}

// NOTES
// Would indeed be great if  code could be understood without comments
// simply by using well-named external functions
// QUESTION: Can you do this to all code?
// QUESTION: If not, when can't you?

// Original Zoog by Mimi Yin at https://editor.p5js.org/mimiyin/sketches/SiMFwzSGS

// Organize Zoog portrait into functions so that you can understand what it's doing without comments and you can easily turn different parts of the sketch on/off by commenting in/out calls to your functions.
