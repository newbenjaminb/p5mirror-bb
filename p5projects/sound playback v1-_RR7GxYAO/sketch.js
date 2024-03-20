// 2 ways to load sound:
// preload
// callback

let song;
let volSlider;
let rateSlider;
let panSlider
  let xMargin = 75;
  let yTop = 40;
  let yLine = 50;


function preload() {
  song = loadSound("sounds/Parfum.mp3");
}

function setup() {
  createCanvas(300, 200);
  createSliders();
  // song.play();
  song.loop();
}

function draw() {
  background(222);
  
  let vo = volSlider.value();
  text(vo, xMargin + 100 +10 , yTop + 15);
  song.setVolume(vo);
  
  let ra = rateSlider.value();
  text(ra, xMargin + 100 +10, yTop + 15 + yLine);
  song.rate(ra);

 let pa = panSlider.value();
  text(pa, xMargin + 100 +10, yTop + 15 + yLine * 2);
  song.rate(ra);
}

function createSliders() {
//let xMargin, yTop, yLine;  

  volSlider = createSlider(0, 1, 0.5, 0.01);
  volSlider.position(xMargin, yTop);
  volSlider.style("width", "100px");
  
  rateSlider = createSlider(0, 2, 1, 0.01);
  rateSlider.position(xMargin, yTop + yLine);
  rateSlider.style("width", "100px");
  
  panSlider = createSlider(0, 2, 1, 0.01);
  panSlider.position(xMargin, yTop + yLine * 2);
  panSlider.style("width", "100px");
  
}

//
