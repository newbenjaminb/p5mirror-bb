let a_video;
let a_image;
let a_scale = 2;
let i_width = 640 * a_scale;
let i_height = 360 * a_scale;
let x_pos;
let y_pos;
let x_margin;
let y_margin;
let cross_len = 5;
let cross_step = 10;
let cross_n;
let a_colors = [];
let a_col;
let angle_top = 0;
let angle_bot = 0;
let angle_step = 0;
let angle_count = 0;
let angle_max = 45;
let a_side = 2;

function setup() {
  angleMode(DEGREES);
  angle_bot = -15;
  // angle_step = PI / 180;
  // angle_step = 0;
  createCanvas(i_width, i_height).mousePressed(function() {
    x_pos = mouseX;
    y_pos = mouseY;
  });
  // createCanvas(320, 240);
  clear();
  pixelDensity(1);
  noStroke();
  // frameRate(2);

  init_video();
  // x_pos = width / 2;
  // y_pos = height / 2;
  x_pos = 0;
  y_pos = 0;
  x_margin = width / 8;
  y_margin = height / 8;
  cross_n = int(width / cross_len);
  a_side = height * a_side;
  clear();
}

function draw() {
  // clear();
  draw_video();
  draw_meter();
  draw_pos();
  show_fps();
}

function draw_pos() {
  fill(a_col);
  rect(x_pos, y_pos, width, cross_len);
  push();
  translate(x_pos, y_pos);
  rotate(angle_bot);
  rect(0, 0, cross_len, a_side);
  pop();
  angle_bot = angle_max * sin(frameCount);
  x_pos += cross_step;
  if (x_pos >= width) {
    x_pos = 0;
    y_pos += cross_step;
    if (y_pos >= height) {
      y_pos = 0;
    }
  }
}

function draw_video() {
  // copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)
  a_image.copy(a_video, 0, 0, width, height,
    0, 0, a_image.width, a_image.height);
  // a_image = a_video.get();
  // image(a_video, 0, 0);
}

function draw_meter() {
  a_col = a_image.get(x_pos, y_pos);
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
  a_video.position(0, 0);
  a_video.style('z-index', '-1')
  // a_video.hide();
  a_image = createImage(width, height);
}

// https://editor.p5js.org/jht1493/sketches/9ig2Vt_mM
// dice video meter angle swing

// https://editor.p5js.org/jht1493/sketches/18hxK_EtY
// dice video meter angles 1

// https://editor.p5js.org/jht1493/sketches/48hmge5Op
// dice video meter hatch

// https://editor.p5js.org/jht1493/sketches/kGIcezl7v
// dice video meter pulse