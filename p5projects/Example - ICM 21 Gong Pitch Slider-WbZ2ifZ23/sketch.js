//https://editor.p5js.org/benjamin.bergery/sketches/WbZ2ifZ23

let sound;
let rateSlider;
let bgHue = 0;
let playbackRate;

// Load sound file
function preload() {
  sound = loadSound("gong.mp3");
}

function setup() {
  colorMode(HSB);
  // Save canvas to a variable
  let cnv = createCanvas(400, 400);
  // When pressed, call the playSong function
  cnv.mousePressed(playSong);

  // create a slider that to udpate
  // the rate of the sound's playback
  // [min], [max], [starting value], [step]
  rateSlider = createSlider(0.1, 2.1, 1, 0.1);
}

function playSong() {
  // Get the current slider value
  let playbackRate = rateSlider.value();
  console.log("Current playback rate: ", playbackRate);

  // Set the sound rate to the slider value
  sound.rate(playbackRate);
  // Play the sound
  sound.play();

  // Change the background color for visual feedback
  bgHue += 30;
  if (bgHue > 360) bgHue = 0;
}

function draw() {
  background(bgHue, 50, 100);
  textSize(14);
  text("press canvas for playback", 20, 40);
}

//https://editor.p5js.org/enickles/sketches/kV3sPUMaX