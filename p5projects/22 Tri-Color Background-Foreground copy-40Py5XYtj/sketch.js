// Don't look at the code...
// Are there 3 colors or 4 colors






// Background and foreground hues
let bg1, bg2, fg1, fg2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
  bg1 = 330;
  bg2 = 383;
  calcfg(); 
}

// Calculate foreground hue to be
// in between the background hues
function calcfg(){
  fg1 = (bg1 + bg2) / 2;
}

function draw() {
  
  // Move the backgrounds and foregrounds
  bg1+=0.1;
  bg2+=0.1;
  
  calcfg();
  
  // Background top
  fill(bg1%360, 54, 36);
  rect(width/2, height / 4, width, height / 2);
  
  // Background bottom
  fill(bg2%360, 66, 31);
  rect(width/2, 3* height / 4, width, height / 2);
  
  // Foreground top
  fill(fg1%360, 46, 34);
  rect(width/2, height/4, width / 6, height / 6);
  
  // Foreground bottom
  fill(fg1%360, 46, 34);
  rect(width/2, 3*height / 4, width / 6, height / 6);  

}

//https://editor.p5js.org/icm4.0/sketches/4MpL1NJtd