// Wk 3 - mouse brush, random, 2 buttons

let fillyr = 255;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  /**** MOUSE BRUSH ***/
  strokeWeight(0);
  fill(255, fillyr, 0, 100);
  // fillyr= 255 yellow brush
  // fillyr = 0 red brush
  circle(mouseX, mouseY, 20);

  /**** TINY RANDOM CIRCLES ***/
  fill(random(255), 0, random(255), 128);
  circle(random(400), random(400), 10);
  console.log("tiny circles");

  /**** BOTTOM RIGHT BUTTON ***/
  fill(255);
  strokeWeight(2);
  rect(width - 50, height - 50, 50, 50);
  fill(0);
  stroke(5);
  if (mouseX > width - 50 && mouseY > height - 50) {
    //console.log("inthebox");
    if (mouseIsPressed) {
      console.log("background reset");
      background(255);
    }
  }

  /**** BOTTOM LEFT BUTTON ***/
  fill(255, 0, 0);
  strokeWeight(2);
  rect(0, height - 50, 50, 50);
  // x,y, width,height
  //  fill(0);
  console.log("fillyr =" + fillyr);
  if (mouseX > 0 && mouseX < width - 350 && mouseY > height - 50) {
    if (mouseIsPressed) {
      if ((fillyr = 255)) {
        console.log("paint red");
        fillyr = 0;
      } else {
        /**** STUMPED ***/
        /**** why doesn't else or if ***/
               //    } if (fillyr =0) {
        /**** change fillyr to 255 ? ***/
        console.log("in the ELSE");
        fillyr = 255;
        console.log("paint yellow");
      }
    }
  }
}
