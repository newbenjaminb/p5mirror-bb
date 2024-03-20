/* Wk3 assignment 2 v1 */

let bg = 0;
// make initial bg value global

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  let increment = 2;
  background(bg);
  bg = bg + increment;
  if (bg > 255) {
    console.log("fps = " + frameRate());
    bg = 0;
  }
}
