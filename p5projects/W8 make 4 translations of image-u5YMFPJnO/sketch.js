//W8 make 4 translations of image
//https://editor.p5js.org/benjamin.bergery/sketches/u5YMFPJnO

function preload() {
  pic = loadImage("AandE300p.png");
}

function setup() {
  createCanvas(400, 400);
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
  
}
