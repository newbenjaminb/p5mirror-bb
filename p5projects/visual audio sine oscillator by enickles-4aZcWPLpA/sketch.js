//visual audio sine oscillator by enickles
/*
https://p5js.org/reference/#/p5.Oscillator
https://p5js.org/reference/#/p5.FFT
*/

let fft;
let osc;

function setup() {
  createCanvas(400, 400);

  // Create a new oscillator
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.amp(0.5);

  // Create FFT object to draw sound waveform
  fft = new p5.FFT();
  fft.setInput(osc);
}

function draw() {
  background(0);

  let freqVal = map(mouseX, 0, width, 10, 880, true);
  
  osc.freq(freqVal)
  console.log(freqVal);
  
  // Draw the waveform
  let waveform = fft.waveform();
  beginShape();
  noFill();
  stroke(255);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();
}

function mousePressed() {
  osc.start(); 
}

function mouseReleased() {
  osc.stop();
}

//https://editor.p5js.org/enickles/sketches/UTtSFolwq