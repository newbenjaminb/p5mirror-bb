//W8.2 -- Flip images done
//https://editor.p5js.org/benjamin.bergery/sketches/dGCMl-FmX

// Complete the sketch and flip the original image two more ways--
// over it’s horizontal axis in the lower left corner and 
// over it’s horizontal and vertical axes in the lower right corner. Completed, the images in the bottom half of the canvas are “reflections” of those in the top half.

let pic;
let w, h;

function preload() {
  pic = loadImage("woodenmodel.jpg");
}

function setup() {
  createCanvas(pic.width, pic.height);
  w = pic.width / 2;
  h = pic.height / 2;
}

function draw() {
  background(220);

  // original
  image(pic, 0, 0, w, h);

  // flip over vertical axis
  push();
  // x, y
  translate(width, 0);
  // -1 * x, 1 * y
  scale(-1, 1);
  //draws reversed from upper right corner
  image(pic, 0, 0, w, h);
  pop();

  // flip over horizontal axis
push();
translate(0,height);
  scale(1,-1);
   image(pic, 0, 0, w, h); 
  pop();
  
  // flip over horizontal and vertical axes
push();
translate(width,height);
  scale(-1,-1);
   image(pic, 0, 0, w, h); 
  pop();
}

// +++++++++++++++++++++++++++++++++ //
/*
https://editor.p5js.org/enickles/sketches/yFFf219X4
Image credit: Kira auf der Heide on Upsplash
https://unsplash.com/@kadh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
*/

