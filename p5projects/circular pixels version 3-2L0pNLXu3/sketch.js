//circular pixels version 3
// https://editor.p5js.org/benjamin.bergery/sketches/2L0pNLXu3

let video;
let vScale = 20;
let brightnessFactor = 3;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  setupVidscaleSlider();
  vScale = vidscaleSlide.value();
  setupBrightSlider();
  // shrink video source by vScale factor
  // video.size(width / vScale, height / vScale);
}

function draw() {
  background(100);

  video.loadPixels();
  // loadPixels();
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (video.width - x + 1 + y * video.width) * 4;
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];

      brightnessFactor = brightSlide.value();
      let bright = (r + g + b) / brightnessFactor;

      vScale = vidscaleSlide.value();
      video.size(width / vScale, height / vScale);

      let w = map(bright, 0, 255, 0, vScale * 1.2);

      noStroke();
      fill(r, g, b, 255);

      ellipse(x * vScale, y * vScale, w, w);
    }
  }
}

function setupVidscaleSlider() {
  createP("  ");
  createSpan("Pixel size is set by scale of video source -- 1 to 30 ");
  vidscaleSlide = createSlider(1, 30, 15, 0.5);
}

function setupBrightSlider() {
  createP("  ");
  createSpan("Brightness factor -- 0 to 10 ");
  brightSlide = createSlider(0, 10, 3, 0.1);
}


// https://github.com/CodingTrain/website-archive/tree/main/Tutorials/P5JS/p5.js_video
// https://editor.p5js.org/jht1493/sketches/hrpVXSthK
// 11.4_p5.js_brightness_mirror
// https://www.youtube.com/watch?v=rNqaw8LT2ZU&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=5

//   rectMode(CENTER);
// rect(x * vScale, y * vScale, w, w);
