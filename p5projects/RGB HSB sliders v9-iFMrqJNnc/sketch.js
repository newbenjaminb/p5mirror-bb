// RGB HSB sliders v9
//https://editor.p5js.org/benjamin.bergery/sketches/iFMrqJNnc
// See if you can match different colors 
// via Red Green Blue versus
// Hue Saturation Brightness sliders

let rSlider, gSlider, bSlider;
// let huSlider;
    let saSlider, brSlider;
//let a_hue; // global variable

function setup() {
  createCanvas(700, 400);
  textSize(15);
  noStroke();
  background(222);
  
  createRGBsliders(); 
  
  createHSBsliders();

  writeComments();
  
  createP();
  createSpan("---> RELOAD THE PAGE to get 2 new colors to match ");
  
  create_ui();
}


function draw() {

  let r = rSlider.value();
  let g = gSlider.value();
  let b = bSlider.value();

  colorMode(RGB);

  // draw top color rectangle
  fill(r, g, b);
  rect(0, 0, 380, 200);

  // display RGB labels and values
  fill(0);
  text("R", 25, 35);
  text(r, 25 + rSlider.width + 30, 35);
  text("G", 25, 65);
  text(g, 25 + gSlider.width + 30, 65);
  text("B", 25, 95);
  text(b, 25 + bSlider.width + 30, 95);

  // switch to Hue Saturation Brightness mode
  colorMode(HSB, 360, 100, 100, 1);

//  let hu = huSlider.value();
  let hu = a_hue;
  let sa = saSlider.value();
  let br = brSlider.value();


  // draw bottom color rectangle  
  fill(hu, sa, br);
  rect(0, 200, 380, 200);

  // display HSB labels and values
  fill(0, 0, 0);
  text("H", 10, 235);
 // text(hu, 25 + huSlider.width + 10, 235);
  text("S", 10, 265);
  text(sa, 25 + gSlider.width + 10, 265);
  text("B", 10, 295);
  text(br, 25 + bSlider.width + 10, 295);
  
  update_ui();
}

/////////////// end DRAW /////////////////

function create_ui(){
  createP();
  createSpan('Hue. ');
  
  // huSlider = createSlider(0, 360, random(0,360));
  

  a_hue = floor(random(0,360));
//  a_hue is variable that contains hue number
  let huSlider = createSlider(0, 360, a_hue).input(function() {
    a_hue = floor(this.value()); 
    // get value of slider directly inside the slider
  });
  
  huSlider.position(25, 220);
  huSlider.style("width", "300px");

  
  // let hue_span = createSpan().id('ia_hue');
  createSpan().id('ia_hue');
  // we create a  html element containing onscreen text with the unique id 'ia_hue' as a place to put the a_hue variable
  // text(hu, 25 + huSlider.width + 10, 235);
  select('#ia_hue').position(25 + huSlider.width + 10, 220);
  // to tell select function to look for the id ia_hue, we need to put a # (pound sign aka bang) in front
  createElement('br');
}

function update_ui() {
  // select('#ia_hue').html('[a_hue=' + a_hue + '] ')
  select('#ia_hue').html(a_hue);
  // the current value of the slider is going to be put into the ia_hue html span every frame
  // select call is hue_span
  // #ia_hue is the id of the onscreen html element that is showing the text
  // a_hue is the variable
  
}

// these 2 functions need to be replaced
// with new approach where the slider is referred to
// using its id and selected with the select function
// 
// this is how html and css work by identifying either instances or for an entire class


function createRGBsliders() {
  rSlider = createSlider(0, 255, random(0,255));
  rSlider.position(45, 20);
  gSlider = createSlider(0, 255, random(20,255));
  gSlider.position(45, 50);
  bSlider = createSlider(0, 255, random(0,255));
  bSlider.position(45, 80);
}

function createHSBsliders() {
  // huSlider = createSlider(0, 360, random(0,360));
  // huSlider.position(25, 220);
  // huSlider.style("width", "300px");
  saSlider = createSlider(0, 100, random(0,100));
  saSlider.position(25, 250);
  brSlider = createSlider(0, 100, random(30,100));
  brSlider.position(25, 280);
}


function writeComments() {
  createP(`
  MATCH THE COLORS
  BETWEEN RGB (Red Green Blue)
  AND HSB (Hue Saturation Brightness)
  USING SLIDERS
       
  It's easier to change HSB (the bottom)
  to match RGB (the top) than it is
  to change the top to match the bottom.
   
  HSB seems more intuitive
  for building colors 
  because it's easy to find a hue.
   
  But the RGB difficulty is also about
  changing brightness, which involves
  changing 2 sliders at a time.<br>
  © Benjamin Bergery 2023
  `);
}

//////////////// old code graveyard //////////////////

function writeComments_text() {

  let topx = 405;
  let topy = 40;
  let line = 20;


}


/////////////// older versions //////////////////
// v6 //https://editor.p5js.org/benjamin.bergery/sketches/uAZuz9rfw

// v8
//https://editor.p5js.org/benjamin.bergery/sketches/L3c3chAPI
