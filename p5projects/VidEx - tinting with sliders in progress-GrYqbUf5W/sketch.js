// VidEx - tinting with sliders in progress
// https://editor.p5js.org/benjamin.bergery/sketches/GrYqbUf5W

var video;

function setup() {
  createCanvas(320, 240);
  background(51);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
}

function draw() {
  let r,g,b;
  tint(255, 175, 0);
  image(video, 0, 0, mouseX, height);
}