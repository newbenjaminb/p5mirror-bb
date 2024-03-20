// v filter x ghosts
https://editor.p5js.org/benjamin.bergery/sketches/BfnX5ilgC

//------------//

// video is refered to in setup and draw

// let video;
// commented out because getting this error:
// Lexical declaration cannot appear in a single-statement context ???????????

function setup() {

  createCanvas(360, 240);
  background(128);
  createP();
  video = createCapture(VIDEO);
  
  // change video display size and hide it
  video.size(320, 240);
  video.hide();
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
      r = r * 1;
      
      // g and b ghosts
      // are actually r values
      // when adding multiples of 4
      let g2 = video.pixels[index + 80];
      let b2 = video.pixels[index + 40];
      
      // assigning new rgb values for each pixel
      video.pixels[index + 0] = r;
      video.pixels[index + 1] = g2;
      video.pixels[index + 2] = b2;
      // putting g2 offset in alpha 
      // creates lag
      video.pixels[index + 3] = g2;
    }
  } 
  
  // save changes to "pixels" array of frame
  video.updatePixels();
  
  // display updated frame in canvas
  image(video,0,0);
}

// -------- NOTES -------- //

// https://editor.p5js.org/benjamin.bergery/sketches/V9grqhsC4

// challenge make vertical ghosts
// by adding multiples of video.width
  
