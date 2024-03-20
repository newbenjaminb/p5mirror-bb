//Wk4-1 -- 6 slimming circles (in setup)
//https://editor.p5js.org/benjamin.bergery/sketches/hOfkrYdPU

function setup() {
  createCanvas(400, 400);
  background(220);
  let radius = 360;
  let ithick = 20;
  
  for (let icount = 5; icount > 0; icount -= 1) // loop counts down from 6 to 1
  {
strokeWeight(ithick); 
    circle(width / 2, height / 2, radius);
    radius = radius - 60;
    ithick -= 4;
  }
}

function draw() {}



//NOTES

// after line 13
// draw from biggest to smallest
  // 360 to 60
// but doesn't matter if you don't fill !

// the GOAL is to have an EMPTY DRAW function
// because YOU'RE WRITING all the LOOPING 

//1. Code this design using a loop

