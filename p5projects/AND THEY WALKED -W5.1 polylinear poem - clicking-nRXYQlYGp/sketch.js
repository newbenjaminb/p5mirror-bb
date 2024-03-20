// AND THEY WALKED
//W5.1 polylinear poem - clicking
// https://editor.p5js.org/benjamin.bergery/sketches/nRXYQlYGp

/*** global variables ***/
let poem = [];
let indy2 = 0;
let x = 30;
let y = 340;
let frameNum;
let icounto;
let writeOrNot;

/*** setup function ***/
function setup() {
  createCanvas(400, 400);
  fillPoem();
  frameRate(0.3);
  frameNum = 0;
  icounto = 0;
  writeOrNot = false;
}

/*** draw function ***/
function draw() {
  background(120); //no overlaps
  frameNum++;

  textSize(40);
  textAlign(LEFT);
  textWrap(WORD);
  fill(255, 233, 0);

  if (mouseIsPressed === true) {
    indy2++;
    console.log("pressed");
    text(poem[indy2], x, 150, y);
  }
  //
  //pauseWriting(2);
  // text(poem[indy3], x, 260, y);
  //pauseWriting(3);
}

//(mouseIsPressed) evaluates to true or false

/*** global functions ***/

function mousePressed() {
  console.log("pressed");
  text(poem[indy2], x, 150, y);
}

function RandomLineNum(indexy) {
  indexy = round(random(0, poem.length - 1));
  showOnConsole(indexy);
  return indexy;
}

function pauseWriting(LineNumb) {
  //   icounto = frameNum;
  //   if (frameNum < icounto+60) {
  // writeOrNot = !writeOrNot;
  //   }
}

function showOnConsole(a) {
  console.log(a);
}

function fillPoem() {
  poem = [
    "when he heard",
    "when she saw",
    "and they walked",
    "and they walked",
    "the world was rounded",
    "the rustle of her gown",
    "something moved",
    "he was dumb founded",
    "then flew like a bird",
    "the forest so dark",
    "without a word",
    "around the world",
    "all the seeds sown",
    "the moonlight bright",
    "the path unwound",
    "she heard the sound",
    "the night was warm",
    "before the storm",
    "her fugitive smile",
    "red wine spilled",
    "his words garbled",
    "lying in the grass",
    "into the forest",
    "he looked askance",
    "they danced slow",
    "her hands reached in",
    "his hand sought hers",
    "a clouded omen",
    "laughing softly",
    "the moon milky",
    "dark rippling",
    "the muddy shoe",
    "and whom is who",
    "it was time",
    "she stole a glance",
    "yes he knew",
    "no she knew",
    "she always knew",
    "and he too",
    "wet clothes on grass",
    "water skins shining",
    "swimming with the moon",
    "suddenly feeling",
    "dark ripples tugging",
    "the current pulls them",
    "diving in darkness",
    "splash in quiet night",
    "floating below the moon",
    "then the rain came",
    // 49 lines
  ];
}
