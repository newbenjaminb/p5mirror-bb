// RGB HSB sliders v7
//https://editor.p5js.org/benjamin.bergery/sketches/uAZuz9rfw
// enabling you to compare and see if you can match colors via Red Green Blue versus
// Hue Saturation Brightness sliders

let rSlider, gSlider, bSlider;
let huSlider, saSlider, brSlider;

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

  let hu = huSlider.value();
  let sa = saSlider.value();
  let br = brSlider.value();

  // draw bottom color rectangle  
  fill(hu, sa, br);
  rect(0, 200, 380, 200);

  // display HSB labels and values
  fill(0, 0, 0);
  text("H", 10, 235);
  text(hu, 25 + huSlider.width + 10, 235);
  text("S", 10, 265);
  text(sa, 25 + gSlider.width + 10, 265);
  text("B", 10, 295);
  text(br, 25 + bSlider.width + 10, 295);
}

/////////////////////////////////////////

function createRGBsliders() {
  rSlider = createSlider(0, 255, random(0,255));
  rSlider.position(45, 20);
  gSlider = createSlider(0, 255, random(20,255));
  gSlider.position(45, 50);
  bSlider = createSlider(0, 255, random(0,255));
  bSlider.position(45, 80);
}

function createHSBsliders() {
  huSlider = createSlider(0, 360, random(0,360));
  huSlider.position(25, 220);
  huSlider.style("width", "300px");
  saSlider = createSlider(0, 100, random(0,100));
  saSlider.position(25, 250);
  brSlider = createSlider(0, 100, random(30,100));
  brSlider.position(25, 280);
}



function writeComments_text() {

  let topx = 405;
  let topy = 40;
  let line = 20;


  text("MATCH THE COLORS", topx, topy);
  text("BETWEEN RGB (Red Green Blue) ", topx, topy + line);
  text("AND HSB (Hue Saturation Brightness)", topx, topy + line * 2);
  text("USING SLIDERS", topx, topy + line * 3);
  text(" ", topx, topy + line * 4);

  let paragraphy = topy + line * 5;
  text("It's easier to change HSB (the bottom)", topx, paragraphy);
  text("to match RGB (the top) than it is", topx, paragraphy + line);
  text("to change the top to match the bottom.", topx, paragraphy + line * 2);
  text(" ", topx, paragraphy + line * 3);
  text("HSB seems more intuitive", topx, paragraphy + line * 4);
  text("for building colors ", topx, paragraphy + line * 5);
  text("because it's easy to find a hue.", topx, paragraphy + line * 6);
  text(" ", topx, paragraphy + line * 7);
  text("But the RGB difficulty is also about", topx, paragraphy + line * 8);
  text("changing brightness, which involves", topx, paragraphy + line * 9);
  text("changing 2 sliders at a time.", topx, paragraphy + line * 10);
    text("© Benjamin Bergery 2023", topx, paragraphy + line * 12);

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
