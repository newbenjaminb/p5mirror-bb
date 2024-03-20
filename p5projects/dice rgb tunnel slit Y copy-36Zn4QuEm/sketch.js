let cross_len = 8;
let slit_h = 4;
let a_step = 1;
let a_video;
let a_image;
let x_pos;
let y_pos;
let x_margin;
let y_margin;
let cross_n;
let a_colors = [];
let i_width = 640;
let i_height = 360;
let a_colr;
let a_track = 0;
let x_off;
let y_off;

function setup() {
  createCanvas(i_width, i_height)
    .mousePressed(function() {
      x_pos = mouseX - x_off;
      y_pos = mouseY - y_off;
    })
  clear();
  pixelDensity(1);
  noStroke();
  frameRate(5);
  init_video();
  init_size();
  create_ui();
}

function init_size() {
  x_pos = a_image.width / 2;
  y_pos = a_image.height / 2;
  if (width > height) {
    x_margin = height / 2 - cross_len * slit_h;
    y_margin = 0;
  } else {
    x_margin = width / 2 - cross_len * slit_h;
    y_margin = 0;
  }
  // x_margin = width / i_margin;
  // y_margin = height / i_margin;
  cross_n = int(width / cross_len);
  x_off = (width - a_video.width) / 2;
  if (x_off < 0) x_off = 0;
  y_off = (height - a_video.height) / 2;
  if (y_off < 0) y_off = 0;
  a_video.position(x_off, y_off);
}

function draw() {
  clear();
  // a_video.position(x_pos, y_pos);
  draw_video();
  x_pos += a_step;
  if (x_pos >= a_image.width) {
    x_pos = 0;
    y_pos += a_step;
    if (y_pos >= a_image.height) {
      y_pos = 0;
    }
  }
  if (a_track) {
    fill(a_colr);
    rect(x_pos + x_off, 0, cross_len, height);
    rect(0, y_pos + y_off, width, cross_len);
  }
  update_ui();
}

function draw_video() {
  // copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)
  a_image.copy(a_video, 0, 0, a_video.width, a_video.height,
    0, 0, a_image.width, a_image.height);
  // image(a_video, 0, 0);

  a_colr = a_image.get(x_pos, y_pos);

  // a_image.filter(BLUR, 5);
  // image(a_image, x_off, y_off);
  let xm = width / 2;
  let ym = height / 2;
  image(a_image, xm - x_pos, ym - y_pos);

  draw_bands(a_colr);
}

function draw_bands(col) {
  a_colors.push(col);
  if (a_colors.length > cross_n) {
    // Remove first
    a_colors.splice(0, 1);
  }
  let w = int(width / 2);
  let h = int(height / 2);
  let xm = w - cross_len / 2;
  // let ym = h - cross_len / 2;
  let ym = h;
  fill(col);
  let xl = xm;
  rect(xl, ym, cross_len, cross_len);
  let xr = xl + cross_len;
  xl -= cross_len;
  let yt = ym - cross_len;
  let yb = ym + cross_len;
  let ci = a_colors.length - 2;
  while (ci >= 0) {
    // while (w > x_margin && ci >= 0) {
    let co = a_colors[ci];
    fill(co);
    if (xl < x_margin) {
      let hh = height - xl * 2;
      rect(xl, xl, cross_len, hh);
      // console.log('xr', xr, 'ci', ci);
      rect(xr, xl, cross_len, hh);
      let ww = width - xl * 2;
      rect(xl, xl, ww, cross_len);
      rect(xl, xl + hh, ww, cross_len);
    } else {
      rect(xl, ym, cross_len, cross_len);
    }
    if (xr <= width - x_margin) {
      rect(xr, ym, cross_len, cross_len);
    }
    xl -= cross_len;
    xr += cross_len;
    // yt -= cross_len;
    // yb += cross_len;
    ci--;
  }
  ci = a_colors.length - 2;
  while (ci >= 0) {
    let co = a_colors[ci];
    fill(co);
    if (yt >= y_margin) {
      rect(xm, yt, cross_len, cross_len);
    }
    if (yb <= height - y_margin) {
      rect(xm, yb, cross_len, cross_len);
    }
    yt -= cross_len;
    yb += cross_len;
    ci--;
  }
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
  a_video.style('z-index', '-1')
  a_video.hide();
  a_image = createImage(width, height);
}

function create_ui() {
  createSpan().id('ifps');
  createSpan().id('icolr');
  createSpan().id('ixy');
  createElement('br');
  createButton('Fill ').mousePressed(function() {
    resizeCanvas(windowWidth, windowHeight);
    init_size();
  });
  createButton('Inset').mousePressed(function() {
    resizeCanvas(i_width, i_height);
    init_size();
  });
  createButton('Reset').mousePressed(function() {
    a_colors = [];
  });
  createCheckbox('track', a_track).changed(function() {
    a_track = this.checked();
  });
  createA(
    'https://editor.p5js.org/jht1493/present/mrqe_1QC3',
    'present', '_blank');
}

function update_ui() {
  select('#icolr').html('[rgba=' + a_colr + ']');
  select('#ixy').html('[x=' + x_pos + ' y=' + y_pos + ']');
  select('#ifps').html('[fps=' + round(frameRate(), 2) + '] ')
}

// https://editor.p5js.org/jht1493/sketches/mrqe_1QC3
// dice rgb tunnel slit Y

// https://editor.p5js.org/jht1493/sketches/A_rqvjkaY
// dice rgb tunnel slit

// https://editor.p5js.org/jht1493/sketches/ZDF3a-rkI
// dice rgb tunnel

// https://editor.p5js.org/jht1493/sketches/4V8rXK0dx
// dice rgb tunnel run

// https://editor.p5js.org/jht1493/sketches/hpuw3FMBM
// dice rgb frame filter

// https://editor.p5js.org/jht1493/sketches/hnRL9ga5O
// dice rgb frame

// https://editor.p5js.org/jht1493/sketches/kGIcezl7v
// dice video meter pulse