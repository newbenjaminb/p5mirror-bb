// MOUSEPRESSED runs for 1 frame
// as seen by running frameRate(1)
// so put background in mousePressed
// do not put background in draw()

function setup() {
  createCanvas(400, 400);
  frameRate(1);

  background(120);
  fill(255, 233, 0);
  textSize(40);
  textAlign(LEFT);
  textWrap(WORD);
}

function draw() {
  // background(120); 
}

function mousePressed() {
  background(120);
  text("bonjour", 30, 30, 370, 370);
  console.log("mousePressed");
}
