// checkerboard with if to run once
//https://editor.p5js.org/benjamin.bergery/sketches/N7bfhhT7f

let rouge=255;
let icount=0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (icount ==0)
  // to prevent flicker
  {
  checkerboard () 
  }
}

 function checkerboard(){
 for (let x = 0; x <= width; x += width / 10) { 
     for (let y = 0; y <= height; y += height / 10) {
      fill(rouge, 0, 0);
       // color it black or red
      rect(x, y, width / 10, width / 10);
      if (rouge==0) {rouge=255;}
       // if black make red for next square
      else {rouge=0}
       // otherwise make black
       icount = icount + 1;
      console.log("icount = "+icount);
    }     
  }    
 }

// NOTES 
// WHY THIS WORKS
// line 17 is true only ONCE
// so checkerboard only runs ONCE
