let timer, rot0;
let pink, grin, bloo, yell;

 function setup () {
  createCanvas(800, 600, P3D);
  hint(DISABLE_OPTIMIZED_STROKE);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100);
  pink = color(323, 100, 100);
  bloo = color(239, 100, 100);
  yell = color(54, 100, 100);
  grin = color(119, 100, 100);
}
 function draw() {
  background(0);
  timer += 0.01;
  let a = map(sin(timer), -1, 1, 40, 360);
  let arc1 = map(sin(timer), -1, 1, 0, 360);
  let arc2 = map(cos(timer), -1, 1, 0, 360);
  strokeWeight(10);
  noFill();

  for (let i = 1; i < 10.1; i++) {
    stroke(grin, a/(i*5));
    arc(width/2, height/2, 300, 300, 0, radians(arc1)/i, OPEN);  ///// SECOND RING /////

    stroke(bloo, a/(i*5));
    arc(width/2, height/2, 240, 240, radians(-arc1)/i, 0, OPEN);  //// MAIN RING //////
  }
  stroke(yell, a/2);
  arc(width/2, height/2, 360, 360, radians(-arc2+181), radians(180), OPEN);       
   //// OTHER RING /////
  stroke(pink, a);
  //fill(200, 0, 200, 60);
  arc(width/2, height/2, 360, 360, radians(-arc1+181), radians(180), PIE);      
   ///// OTHER RING //////
  fill(0);
  stroke(0);
  ellipse(width/2, height/2, 60, 60);        ////// INNERMOST CIRCLE /////

  fill(255);
  text(frameRate, 2, 20);
}