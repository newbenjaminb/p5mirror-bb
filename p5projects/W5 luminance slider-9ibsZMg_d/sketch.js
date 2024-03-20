//W5 luminance slider without DOM
// https://editor.p5js.org/benjamin.bergery/sketches/9ibsZMg_d

let slider;

function setup() {
  createCanvas(400,400);
  SliderBelowCanvas();
}

function draw() {
  let val = slider.value();
  background(val);
}

function SliderBelowCanvas() {
  slider = createSlider(0, 255, 100);
  slider.position(10, 410);
  slider.style('width', '300px');
}

// NOTES
// slider is placed outside the canvas without using DOM commands, by defining y > height

// https://p5js.org/reference/#/p5/createSlider
