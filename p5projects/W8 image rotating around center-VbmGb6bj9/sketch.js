//W8 image rotating around center
//https://editor.p5js.org/benjamin.bergery/sketches/VbmGb6bj9

function preload() {
  pic = loadImage("AandE300p.png");
}

let angle = 0;
function setup() {
  angleMode(DEGREES);
   
  createCanvas(pic.width, pic.height);
  w = pic.width / 2;
  h = pic.height / 2;
  background(220);
  image(pic, 0, 0, w, h);
  translate(w, 0);
  image(pic, 0, 0, w, h);
  translate(-w, h);
  image(pic, 0, 0, w, h);
  translate(w, 0);
  image(pic, 0, 0, w, h);
  
}

function draw() {
  translate(w,h);
   rotate(angle); 
  image(pic,0,0 ,w,h);
  angle = angle + 1;
  
}
