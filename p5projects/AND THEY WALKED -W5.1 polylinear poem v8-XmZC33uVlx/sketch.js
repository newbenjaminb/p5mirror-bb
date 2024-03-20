// AND THEY WALKED
//W5.1 polylinear poem v8 and counting
// https://editor.p5js.org/benjamin.bergery/sketches/XmZC33uVlx

/*** global variables ***/
let poem = [];
let indy1,indy2,indy;
let x = 30;let y =340;
/*************************/
function setup() {
  createCanvas(400, 400);
  fillPoem();
  frameRate(0.3);
}

/*************************/
function draw() {
  background(120); //avoid overlaps
  textSize(40);
  textAlign(LEFT);
  textWrap(WORD);
  fill(255, 233, 0);
  // indy1 = round(random(0, poem.length - 1));
  indy1 = RandomLineNum();
  indy2 = RandomLineNum();
  indy3 = RandomLineNum();
 
  text(poem[indy1], x, 40, y);
  text(poem[indy2], x, 150, y);
  text(poem[indy3], x, 260, y);
  
  function mousePressed() {
    // let icount=1
    text(poem[indy1], 30, 40, 340);
  }
  //(mouseIsPressed) evaluates to true or false
}

/*** global functions ***/

function RandomLineNum(indexy) {
  indexy = round(random(0, poem.length - 1));
  showOnConsole(indexy);
  return indexy;
}
// function writePoem() {
//   text(poem[indy1], 30, 40, 340);
// }
function showOnConsole(a) {
  console.log(a);
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
    'and whom is who',
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
  ];
}
