// VidEx R G B sliders v2
// createCapture() - image() - filter
// https://editor.p5js.org/benjamin.bergery/sketches/EWsyCHaVr

let a_width = 50;
let a_x = 50;
let a_crawl = true;

function setup() {
  createCanvas(400, 300);

  capture = createCapture(VIDEO);
  // createCapture() is part of p5 DOM library
  // creates html5 element on page below canvas
  // which can be scripted in the canvas
  capture.size(640 / 3, 480 / 3);
  capture.hide();

  createRGBsliders();
  
  createButton("GRAY").mousePressed(1);
}

function draw() {
  image(capture, 0, 0, width, height);

  // tintWithRGBsliders();

  let rval = rslide.value();
  let bval = bslide.value();
  let gval = gslide.value();
  tint(rval, bval, gval);



  // filter(THRESHOLD,0.2);
}

// external functions //////////////////

function mousePressed(variable) {
 if (variable == 1) { filter(GRAY);}
}

function createRGBsliders() {
  createP();
  createSpan("R ");
  rslide = createSlider(0, 255, 255);
  // createP();
  createSpan("-- G ");
  bslide = createSlider(0, 255, 255);
  // createP();
  createSpan("-- B ");
  gslide = createSlider(0, 255, 255);
  createP();
}

// Connecting ui directly to variables.
// allows you to have variables in setup
// and also turn off all UI at once

function build_ui() {
  // push DOM ui below canvas
  createP();
  createButton("GRAY").mousePressed(function () {
    filter(GRAY);
  });
  createP();

  // createSlider(min, max, [value], [step])
  createSlider(0, 200, a_width).input(function () {
    a_width = this.value();
  });
  createP();

  // createCheckbox([label], [value])
  createCheckbox("Crawl", a_crawl).changed(function () {
    a_crawl = this.checked();
  });
}

// NOTE: function ()
// NOTE: DOM variables local
// TODO: have circle move on startup
// TODO: Add a variable and a button to change direction
// TODO: Add slider for speed
// TODO-Challenge: Add slider to adjust size of circle
// TODO-Challenge: Change to bounce motion

// build_UI via jht
//https://editor.p5js.org/jht1493/sketches/mdhUP_wTu

////////////////////////////////////////

// function tintWithRGBsliders() {
//   let rval = rslide.value();
//   let bval = bslide.value();
//   let gval = gslide.value();
//   tint(rval, bval, gval);
// }

// THRESHOLD key Converts the image to black and white pixels depending if they are above or below the threshold defined by the level parameter. The parameter must be between 0.0 (black) and 1.0 (white). If no level is specified, 0.5 is used
// GRAY b&w
// OPAQUE sets alpha channel to entirely opaque (e.g. 255?)
// INVERT negative
// POSTERIZE, Limits each channel of image to number of colors specified as the parameter. parameter can be set to values between 2 and 255, results are most noticeable in the lower ranges
// ERODE, Reduces the light areas. No parameter
// DILATE Increases the light areas. No parameter
// BLUR Gaussian blur very SLLOOOWW
// get's nice around 10
// If no parameter, equivalent to Gaussian blur of radius 1. Larger values increase the blur

//createCapture(type, [callback])
// Parameters
//type String|Constant|Object: type of capture, either VIDEO or AUDIO if none specified, default both, or a Constraints object
//callback Function: function to be called once stream has loaded (Optional)
// Creates a new HTML5 <video> element that contains the audio/video feed from a webcam.
// The element is separate from the canvas and is displayed by default.
// The element can be hidden using .hide().
// The feed can be drawn onto the canvas using image().
// The loadedmetadata property can be used to detect when the element has fully loaded

// filter(filterType, [filterParam])
// Parameters
// filterType Constant: either THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, ERODE, DILATE or BLUR.
// See Filters.js for docs on each available filter
// filterParam Number: an optional parameter unique to each filter, see above (Optional)

//https://editor.p5js.org/benjamin.bergery/sketches/LR8cNBO4x
//https://editor.p5js.org/benjamin.bergery/sketches/77QaYnsBE
