// v slit v2 continual
// https://editor.p5js.org/benjamin.bergery/sketches/-llRdBMku

let rx = 0;

let video;
function setup() {
  createCanvas(600, 240);
  createP();
  video = createCapture(VIDEO);

  // change video display size
  video.size(320, 240);
  // hide video source
  video.hide();
}

function draw() {
  let slitty = width / 2;
  let h = height;
  let wido = 1;

  copy(video, width / 2, 0, wido, h, rx, 0, wido, h);
  rx = rx + 1;
  if (rx == width) {
    rx = 0;
  }
}

//-------- NOTES ----------------------------//
/* copy method 
copy(sourceImage, rectx,recty,rectw,recth,
                  rect2x,rect2y,rect2w,rect2h)
*/

// https://editor.p5js.org/benjamin.bergery/sketches/VmxHBu2zG

// challenge add a pause button
