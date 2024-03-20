// painting with alpha
function setup() {
  createCanvas(400, 400);
   background(0); 
}

function draw() {
  strokeWeight(0)
  // get rid of circle circumference line
  fill(255,mouseY)
  //fill(gray, [alpha])
  circle(mouseX, mouseY,20)
  // circle(x, y, d) x,y and diameter
  console.log("iteration")
  // console.log shows iteration number
  // a great troubleshooting tool
  // when the value is constant it will increment the 

}