// explore coordinates
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(255,0,0);
  circle(mouseX,mouseY,30);
  console.log("X = "+mouseX+" - Y = " +mouseY)
}