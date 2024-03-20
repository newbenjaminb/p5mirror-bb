// https://editor.p5js.org/jht1493/sketches/mEXETIijv
// video scan gap center

let nwidth = 640;
let nheight = 480;
let xgap = nwidth / 6;
let ygap = nheight / 6;
let x0;
let y0;
let capture;

function setup() {
  createCanvas(nwidth, nheight);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
  x0 = int(nwidth / 2);
  y0 = int(nheight / 2);
}

function draw() {
  // colorMode(HSB);
  strokeWeight(1);
  background(255);

  // image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight],
  let img = capture.get();
  image(img, 0, 0, nwidth);

  let y1 = y0 - ygap/2;
  let y2 = y0 + ygap/2;
  let x1 = x0 - xgap/2;
  let x2 = x0 + xgap/2;
  for (let x = 0; x < img.width; x++) {
    let c1 = img.get(x, y1);
    stroke(c1);
    line(x, 0, x, y1);
    let c2 = img.get(x, y2);
    stroke(c2);
    line(x, y2, x, nheight);
  }
  for (let y = y1; y < y2; y++) {
    let c1 = img.get(x1, y);
    stroke(c1);
    line(0, y, x1, y);
    let c2 = img.get(x2, y);
    stroke(c2);
    line(x2, y, nwidth, y);
  }
}

// https://editor.p5js.org/jht1493/sketches/oHVI5tU4BP
// video scan gap

// https://editor.p5js.org/jht1493/sketches/Q9jdcICpW
// video scan mouseY

// https://editor.p5js.org/jht1493/sketches/gnx2IQn1N
// video scan

// https://github.com/processing/p5.js/wiki/Beyond-the-canvas#capture-live-video
