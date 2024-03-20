//W5.1 polylinear poem self gen
// https://editor.p5js.org/benjamin.bergery/sketches/8Y8kASs_4

/*** global variables ***/
let poem = [];
let indy1, indy2, indy;
let x = 30;
let y = 340;
let frameNum;
let icounto;
let writeOrNot;
let time_elapsed;

/*** setup function ***/
function setup() {
  background(120);
  createCanvas(500, 400);
  fillPoem();
//  frameRate(0.3); // VERY slow rate
  frameNum = 0;
  icounto = 0;
}

/*** draw function ***/
function draw() {
   background(120); //no overlaps
  frameNum++;
  // textSize(12);
  // text(icounto, 350, 370,20,20);
  // how to put number in text();

  textSize(35);
  textAlign(LEFT);
  textWrap(WORD);
  fill(255, 233, 0);

  indy1 = RandomLineNum();
  indy2 = RandomLineNum();
  indy3 = RandomLineNum();

  let secondes = round(millis()/1000);
  showB('seconds = ',secondes);
  text(poem[indy1], x, 40, width - x, y);
  
  if (millis()/1000 - secondes > 1) {
    text(poem[indy2], x, 150, width - x, y);
    showB ('loop1',1)
    secondes = round(millis()/1000);
    
//     if (millis()/1000 - secondes > 1){
//   if (millis()/1000 - secondes > 1) {
//  text(poem[indy3], x, 260, width - x, y);}
//       }
}
 

}

/*** global functions ***/

function RandomLineNum(indexy) {
  indexy = round(random(0, poem.length - 1));
  //showB(indexy);
  return indexy;
}

// function pauseWriting() {
//   icounto = frameNum;
//   if (frameNum < icounto+60) {
//     writeOrNot = !writeOrNot;
//   }
// }

function showB(a,b) {
console.log(a,b);
}

function fillPoem() {
  poem = [
    "when he heard",
    "when she saw",
    "and they walked",
    "the world was rounded",
    "the rustle of her gown",
    "something moved inside",
    "he was dumb founded",
    "then flew like a bird",
    "without a word",
    "around the world",
    "all the seeds sown",
    "the moonlight bright",
    "the path unwound",
    "she heard the sound",
    "the night was warm",
    "her fugitive smile",
    "the wine spilled",
    "his words garbled",
    "lying in the grass",
    "into the forest",
    "he looked askance",
    "they danced slowly",
    "her hands reached in",
    "his hand sought hers",
    "as the omen clouded",
    "laughing softly together",
    "the moon was milky",
    "the dark ripples",
    "the muddy shoe",
    "and whom is who",
    "it was time",
    "she stole a glance",
    "yes he knew",
    "no she knew",
    "she always knew",
    "and he too",
    "wet clothes by the river",
    "skins shining in water",
    "they swam under the moon",
    "they felt the current pull",
    "the dark ripples tugging",
    "diving into darkness",
    "splash in quiet forest",
    "they floated below the moon",
    // 44 lines
  ];
}

// function pauseLineWriting() {
//   millis()
// Returns Number: the number of milliseconds since starting the sketch
// }
