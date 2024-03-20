// AND THEY WALKED
//W5.1 polylinear poem v13
// https://editor.p5js.org/benjamin.bergery/sketches/WHMGg3YX3

/*** global variables ***/
let poem = [];
let indy1, indy2, indy;
let x = 30;
let y = 340;
let frameNum;
let icounto;
let writeOrNot;

/*** setup function ***/
function setup() {
  createCanvas(400, 400);
  fillPoem();
  // frameRate(0.3);
  frameNum = 0;
  icounto = 0;
  writeOrNot = true;
}

/*** draw function ***/
function draw() {
  background(120); //no overlaps
  frameNum++;
  // textSize(12);
  // text(icounto, 350, 370,20,20);
  // how to put number in text();

  textSize(40);
  textAlign(LEFT);
  textWrap(WORD);
  fill(255, 233, 0);

  indy1 = RandomLineNum();
  indy2 = RandomLineNum();
  indy3 = RandomLineNum();

  text(poem[indy1], x, 40, y);
  pauseWriting();
  showOnConsole(frameNum);
  text(poem[indy2], x, 150, y);
  pauseWriting();
  showOnConsole(frameNum);
  text(poem[indy3], x, 260, y);
  pauseWriting();
  showOnConsole(frameNum);
}

//(mouseIsPressed) evaluates to true or false

/*** global functions ***/

function RandomLineNum(indexy) {
  indexy = round(random(0, poem.length - 1));
  //showOnConsole(indexy);
  return indexy;
}

function pauseWriting() {
  icounto = frameNum;
  if (frameNum < icounto + 60) {
    
  }
}

function showOnConsole(a) {
  console.log(a);
}

// function mousePressed() {
//     // let icount=1
//     text(poem[indy1], 30, 40, 340);

// QUESTION raised with this is
// how to insert pauses in draw()
//

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
    "her skin shone in the water",
    "they swam under the moon",
    "they felt the current pull",
    "the dark ripples tugging",
    "diving into darkness",
    "splash in quiet forest",
    "they floated below the moon",
    // 44 lines
  ];
}
