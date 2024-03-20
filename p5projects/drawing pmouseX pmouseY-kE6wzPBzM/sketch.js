function setup() {
  createCanvas(400, 400);
   background(220);
}

function draw() {
 stroke(255);
  strokeWeight(3);
  line(mouseX,mouseY,pmouseX,pmouseY);
  let ligne=mouseX-pmouseX;
console.log(ligne);
}