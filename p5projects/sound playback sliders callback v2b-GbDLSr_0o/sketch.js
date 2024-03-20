//sound playback sliders callback v2b 
//https://editor.p5js.org/benjamin.bergery/sketches/GbDLSr_0o
// 2 ways to load sound:
// preload
// CALLBACK

  let song;
  let volSlider;
  let rateSlider;
  let panSlider
  
  let xLabel = 20;
  let xMargin = 75;
  let yTop = 40;
  let yLine = 50;

// preload only //
// function preload() {
  // song = loadSound("sounds/Parfum.mp3");
// }


function setup() {
  createCanvas(300, 200);
  createSliders();

  // preload //  
  // in callback you can't have song.play
  // in setup because you don't know 
  // if it has loaded
    // song.play(); or
    //song.loop();

  // callback adds a function
  song = loadSound("sounds/Parfum.mp3",loaded);
}


// in callback you create external loaded function
function loaded() {
  //song.play();
      song.loop();
}

///////////////////

function draw() {
  background(222);
  
  let vo = volSlider.value();
  text('VOLUME',xLabel - 2,yTop + 13);
  text(vo, xMargin + 100 +10, yTop + 15);
  song.setVolume(vo);
  
  let ra = rateSlider.value();
  text('RATE',xLabel + 10,(yTop + 12) * 2);
  text(ra, xMargin + 100 +10, yTop + 15 + yLine);
  song.rate(ra);

 let pa = panSlider.value();
  text('PAN',xLabel + 10,(yTop + 12) * 3);
  text(pa, xMargin + 100 +10, yTop + 15 + yLine * 2);
  song.rate(ra);
}

////////////////////////////


function createSliders() {
//let xMargin, yTop, yLine;  

  volSlider = createSlider(0, 1, 0.5, 0.01);
  volSlider.position(xMargin, yTop);
  volSlider.style("width", "100px");
  
  rateSlider = createSlider(0, 2, 1, 0.01);
  rateSlider.position(xMargin, yTop + yLine);
  rateSlider.style("width", "100px");
  
  panSlider = createSlider(-1, 1, 0, 0.01);
  panSlider.position(xMargin, yTop + yLine * 2);
  panSlider.style("width", "100px"); 
}


