// mousePressed ONCE vs mouseIsPressed CONTINOUS 
//https://editor.p5js.org/benjamin.bergery/sketches/DucPF3g7j

function setup() {
  createCanvas(400, 400);
}

// mouseIsPressed = BOOLEAN true CONTINOUSLY
// as long as you keep mouse pressed down
function draw() {
  if (mouseIsPressed) {
    let radiusb = random(1, 36);
    ellipse(mouseX, mouseY, radiusb, radiusb);
  }
}

// mousePressed = external FUNCTION runs ONCE
// after mouse tap
function mousePressed() {
  let r = random(0, 255);
  console.log(r);
  background(r, 0, 0);
}

//https://editor.p5js.org/fergfluff/sketches/HkAydbxiZ
