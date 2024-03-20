let growth, detect;

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  fill(128);
  let growth = random(20, 50);
  let movement = mouseX - pmouseX;
  console.log("movement= " + movement);
  if (movement > 10) {
    growth = 0;
    console.log("steady");
  }
  growth = random(20, 50);
  circle(mouseX, mouseY, growth);
}
