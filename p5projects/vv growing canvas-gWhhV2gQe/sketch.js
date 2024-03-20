// wk2-2 growing canvas with 4 rectangles 
// from 100 to 800 pixels

let canvasx = 100;
let canvasy = 100;
// defining canvas dimensions as variables

function setup() {
  console.log("canvas with 4 rectangles grows from 100 to 800 pixels");
}

function draw() {
  createCanvas(canvasx, canvasy);
  background(128);

  let quarterx = canvasx / 4;
  // defining rectangle width
  //as a quarter of canvas width

  rect(0, 0, quarterx, canvasy);
  rect(quarterx, 0, quarterx, canvasy);
  rect(quarterx * 2, 0, quarterx, canvasy);
  rect(quarterx * 3, 0, quarterx, canvasy);

  //Writing an else block is optional.
  if (canvasx > 500) {
    //A condition is placed between parenthesis following 'if'
    canvasx = 0;
  }
  //when that condition evalues to truthy,
  //the code between following curly braces is run.
  else {
    canvasx = canvasx + 1;
  }
  //Alternatively, when the condition evaluates to falsy,
  //the code between the curly braces of 'else' block is run instead.
  if (canvasy > 500) { 
    canvasy = 0;
  } else {
    canvasy = canvasy + 1;
  }
}
