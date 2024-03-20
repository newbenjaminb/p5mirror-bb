// v slit v1
// https://editor.p5js.org/benjamin.bergery/sketches/6ygUbiOk-

  let rx = 0 ;

let video;
function setup() {
  createCanvas(600, 240);
  video = createCapture(VIDEO);

  // change video display size
  video.size(320, 240);
}

function draw() {
  // background(220);
  // video.loadPixels();
  // display video in the canvas
  // image(video,0,0);
  let slitty = width / 2;
  let h = height;
  let wido = 1;

  // for (rx = 0; rx < width; rx++) 
  // {
    copy(video, width / 2, 0, wido, h, rx, 0, wido, h);
    rx = rx + 1;
  // }
}

/* copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)
copy(sourceImage, rectx,recty,rectw,recth,
                  rect2x,rect2y,rect2w,rect2h)

copy(sx, sy, sw, sh, dx, dy, dw, dh)
Parameters
srcImage p5.Image|p5.Element: source image
sx Integer: X coordinate of the source's upper left corner
sy Integer: Y coordinate of the source's upper left corner
sw Integer: source image width
sh Integer: source image height
dx Integer: X coordinate of the destination's upper left corner
dy Integer: Y coordinate of the destination's upper left corner
dw Integer: destination image width
dh Integer: destination image height */

//// https://editor.p5js.org/benjamin.bergery/sketches/6ygUbiOk-
