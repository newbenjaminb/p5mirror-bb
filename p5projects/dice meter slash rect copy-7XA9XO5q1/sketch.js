let cross_len = 16;
let cross_step = 16;
// let cross_len = 16;
// let cross_step = 16;
let a_side = cross_len;
let a_video;
let a_image;
let a_scale = 1;
let i_width = 640 * a_scale;
let i_height = 360 * a_scale;
let x_pos;
let y_pos;
let a_col;

function setup() {
  angleMode(DEGREES);
  createCanvas(i_width, i_height).mousePressed(function() {
    x_pos = mouseX;
    y_pos = mouseY;
  });
  clear();
  pixelDensity(1);
  init_video();
  x_pos = 0;
  y_pos = 0;
  clear();
}

function draw() {
  draw_video();
  while (draw_pos() != 2) {
    //
  }
  show_fps();
}

function draw_pos() {
  a_col = a_image.get(x_pos, y_pos);
  a_col[3] = 100;
  stroke(a_col);
  fill(a_col);
  push();
  translate(x_pos, y_pos);
  // rotate(random(360));
  rotate(frameCount);
  // line(0, 0, cross_len, a_side);
  rect(0, 0, cross_len, a_side);
  pop();
  x_pos += cross_step;
  let ending = 0;
  if (x_pos >= width) {
    ending = 1;
    x_pos = 0;
    y_pos += cross_step;
    if (y_pos >= height) {
      ending = 2;
      y_pos = 0;
    }
  }
  return ending;
}

function draw_video() {
  // copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)
  a_image.copy(a_video, 0, 0, width, height,
    0, 0, a_image.width, a_image.height);
  // a_image = a_video.get();
  // image(a_video, 0, 0);
}

function init_video() {
  let vconstraints = {
    video: {
      width: 1920,
      height: 1080,
    },
  };
  a_video = createCapture(vconstraints, function(stream) {
    // a_state.ready = 1;
  });
  a_video.size(width, height);
  // a_video.position(0, 0);
  a_video.style('z-index', '-1')
  // a_video.hide();
  a_image = createImage(width, height);
}

// https://editor.p5js.org/jht1493/sketches/o3okKO3VV
// dice meter slash rect

// https://editor.p5js.org/jht1493/sketches/hhZ_Vr8jA
// dice meter slash fa

// https://editor.p5js.org/jht1493/sketches/qBXQBkxwn
// dice meter slash

// https://editor.p5js.org/jht1493/sketches/s7br_S9p3
// dice meter angle sqr

// https://editor.p5js.org/jht1493/sketches/ePwCvca2R
// dice video meter angle

// https://editor.p5js.org/jht1493/sketches/9ig2Vt_mM
// dice video meter angle swing

// https://editor.p5js.org/jht1493/sketches/18hxK_EtY
// dice video meter angles 1

// https://editor.p5js.org/jht1493/sketches/48hmge5Op
// dice video meter hatch

// https://editor.p5js.org/jht1493/sketches/kGIcezl7v
// dice video meter pulse