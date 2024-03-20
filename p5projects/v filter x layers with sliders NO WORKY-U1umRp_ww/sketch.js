// v filter x layers with sliders NO WORKY
//https://editor.p5js.org/benjamin.bergery/sketches/U1umRp_ww

// SLIDERS NO WORKY see line 62 <----

//------------//

// video is in setup and draw

// let video;
// commented out because getting this error:
// Lexical declaration cannot appear in a single-statement context ???????????

let b2, g2;
let indexb2, indexg2;

function setup() {

  createCanvas(360, 240);
  background(128);
  createP();
  video = createCapture(VIDEO);
  
  // change video display size and hide it
  video.size(320, 240);
  video.hide();
  
  setupSliderA();
  setupSliderB();
}

//------------//

function draw() {
  
  // load rgba video pixels into "pixels" array
  video.loadPixels();
  
  // 2 nested for loops scan each y line
  // for each x value
  // in a single frame
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {

      // index jumps every 4 values of
      // R,G,B,Alpha in pixels array
      let index = (video.width - x + 1 + y * video.width) * 4;

      // getting red value for pixel
      let r = video.pixels[index + 0];
      
      // g,b not processed, thus un-needed
      // let g = video.pixels[index + 1];
      // let b = video.pixels[index + 2];
      
      // doubling r value
      r = r * 2;
      
      // g and b ghosts
      // are actually r values
      // when adding multiples of 4
      let indexg2 = sliderA.value();
      let indexb2 = sliderB.value();
      let g2 = video.pixels[indexg2];
      let b2 = video.pixels[indexb2];
      // THIS DOES NOT WORK
      
      // assigning new rgb values for each pixel
      video.pixels[index + 0] = r;
      video.pixels[index + 1] = g2;
      video.pixels[index + 2] = b2;
      
    }
  } 
  
  // save changes to "pixels" array of frame
  video.updatePixels();
  
  // display updated frame in canvas
  image(video,0,0);
}

//------------//

 //to put in setup
// setupSliderA();
// setupSliderB();

// to use in draw
// bOffset = sliderA.value();
// gOffset = sliderB.value();

function setupSliderA() {
  createP("  ");
  createSpan("labelA -- increments of 4");
  sliderA = createSlider(0, 360, 80, 4);
}

function setupSliderB() {
  createP("  ");
  createSpan("labelB -- increments of 1");
  sliderB = createSlider(0, 360, 40, 1);
}

//////////////////////////////
// -------- NOTES -------- //

// https://editor.p5js.org/benjamin.bergery/sketches/H9C5i95mV
// https://editor.p5js.org/benjamin.bergery/sketches/V9grqhsC4
// https://editor.p5js.org/benjamin.bergery/sketches/BfnX5ilgC

// challenge: make vertical ghosts
// by adding multiples of video.width
// might require separate for loop for each color
  
