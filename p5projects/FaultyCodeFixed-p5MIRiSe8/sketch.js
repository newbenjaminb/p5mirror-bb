// Faulty code Fixed - benjamin
// Wk 1 exercise 3

// Also deleted spaces in argument lists

function setup() {
  createCanvas(400, 400);
}
// added closing curly

function draw() {
  background(220);
  angleMode(DEGREES);
  //moved into draw function
  // not sure what this does

  stroke(255, 160, 0);
  // added commas
  strokeWeight(8);
  // changed spelling
  fill(255, 230, 0);
  // changed Fill to fill, added semi-colon

  circle(200, 200, 300);
  stroke(130, 70, 3);
  // added semi-colon
  fill(160, 100, 8);
  ellipse(150, 150, 40, 100);
  ellipse(250, 150, 40, 100);

  fill(160, 100, 8);
  // changed O to zero
  arc(200, 225, 200, 160, 0, 180, CHORD);
  // changed Chord to CHORD
  fill(255);
  // arc(200,225,200,80,0,180,CHORD);
}
