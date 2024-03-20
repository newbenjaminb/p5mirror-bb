// wk2 rewrite-sketch-v1
let canvasx = 500;
let canvasy = 300;
// defining canvas dimensions as variables
function setup() {
  createCanvas(canvasx, canvasy);
  background(255)
  let quarterx = canvasx/4;
  // defining rectangle width 
  //as a quarter of canvas width
  
  //let rect3x = quarterx*2;
  //let rect4x = quarterx*3;
  // unnecessary variables
  
  rect(0,0,quarterx,canvasy);
  rect(quarterx,0,quarterx,canvasy);
  rect(quarterx*2,0,quarterx,canvasy);
  rect(quarterx*3,0,quarterx,canvasy);
}

function draw() {
  
}