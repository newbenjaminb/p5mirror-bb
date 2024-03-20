//https://editor.p5js.org/benjamin.bergery/sketches/eKj6ob0uS

let img;
function preload() {
  img = loadImage('whitecircle.jpg');
}
function setup() {
  createCanvas(400,400);
  background(0,0,255);
    image(img, 0, 0);
  filter(BLUR,100);
}

function draw() {
  filter(BLUR,100);
  // strokeWeight(100);
  // stroke(240);
  //circle(200,200,100);
  
}