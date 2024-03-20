//TIMER using millis() via jht v2
//https://editor.p5js.org/benjamin.bergery/sketches/pQZhMlt3C

let itime = 0;

function setup() {
  createCanvas(400, 300);
 itime = millis();
}

function draw() {
  background(220);
  
  let lapse = (millis() - itime)/1000;
  if (lapse >= 0 && lapse < 3) {
    rect(100, 100, 100, 100);
  }
  // reset after 5 seconds
  if (lapse > 5) { itime = millis();}

}


// https://p5js.org/reference/#/p5/millis

// https://editor.p5js.org/jht1493/sketches/DW02dgsn6
// 3.3 counter for time
// Display white rect briefly using frame counter variable

// https://editor.p5js.org/benjamin.bergery/sketches/Vq37MoRDA
// https://editor.p5js.org/jht1493/sketches/e3KJv7fxt

