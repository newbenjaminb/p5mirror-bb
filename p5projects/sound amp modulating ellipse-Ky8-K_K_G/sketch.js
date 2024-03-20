//sound amp modulating ellipse
//https://editor.p5js.org/benjamin.bergery/sketches/Ky8-K_K_G
// using amp.getLevel()[]

let amp;

let button;
let song;
let volSlider;
let rateSlider;
let panSlider;

let xLabel = 20;
let xMargin = 100;
let yTop = 220;
let yLine = 30 ;
//////////////////


function setup() {
  createCanvas(400, 200);
  createP();createSpan(" ");
  button = createButton("PLAY");
  button.mousePressed(togglePlaying);

  createSliders();

  // callback adds a "loaded" function
  song = loadSound("sounds/Parfum.mp3", loaded);
  
  // p5.Amplitude does not work in draw function
  let smoothie = 0;
  amp = new p5.Amplitude(smoothie);
  
}
/////////////////////


function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    button.html('PAUSE')
  } else {
    song.pause();
    button.html('PLAY')
  }
}
/////////////////////


// with callback you create 
// external "loaded" function
// which waits before playing song

function loaded() {
  //song.play();
  song.loop();
}
///////////////////


function draw() {
  background(222);

  let vo = volSlider.value();
  text("VOLUME", xLabel - 2, yTop + 13);
  text(vo, xMargin + 100 + 10, yTop + 15);
  song.setVolume(vo);

  let ra = rateSlider.value();
  text("RATE", xLabel + 10, (yTop + 2) * 2);
  text(ra, xMargin + 100 + 10, yTop + 15 + yLine);
  song.rate(ra);

  let pa = panSlider.value();
  text("PAN", xLabel + 10, (yTop-2) * 3);
  text(pa, xMargin + 100 + 10, yTop + 15 + yLine * 2);
  song.rate(ra);
  
  amp.smooth();
  let level = amp.getLevel();
  console.log(level);

  let xMod = level*1000;
  let yMod = level*800;
  fill(255,50,100,100);
  noStroke();
//ellipse(x, y, w, h, [detail])
ellipse(width/2,height/2,xMod,yMod);
  
}
////////////////////////////

function createSliders() {
  //let xMargin, yTop, yLine;

  volSlider = createSlider(0, 1, .75, 0.01);
  volSlider.position(xMargin, yTop);
  volSlider.style("width", "100px");

  rateSlider = createSlider(0, 2, 1, 0.01);
  rateSlider.position(xMargin, yTop + yLine);
  rateSlider.style("width", "100px");

  panSlider = createSlider(-1, 1, 0, 0.01);
  panSlider.position(xMargin, yTop + yLine * 2);
  panSlider.style("width", "100px");
}
/////////////////////

//sound playback sliders callback pause-button v3
//https://editor.p5js.org/benjamin.bergery/sketches/dHeNZ2q0-
// 2 ways to load sound:
// preload
// CALLBACK


// amplitude = new p5.Amplitude([smoothing])
//Amplitude measures volume between 0.0 and 1.0. 
//Listens to all p5sound by default
//use setInput() to listen to a specific sound source
// optional smoothing Number: between 0.0 and .999 to smooth amplitude readings (defaults to 0) defaults to 0.

//getLevel() Returns a single Amplitude reading at the moment it is called. For continuous readings, run in the draw loop.
