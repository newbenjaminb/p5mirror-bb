// W6 polylinear poem -random stanza clicked
// https://editor.p5js.org/benjamin.bergery/sketches/4Uw6X0SxP

let indy = 0;
let lines = [];
let text_X, text_Y, text_Width, text_Bottom, text_Yincrement;
let verse = 1;

function setup() {
  frameRate(1);
  createCanvas(1980 / 3, 1080 / 3);
  //height,width unavailable before setup
  text_X = width / 10;
  text_Y = text_X;
  text_Yincrement = height / 3.5;
  text_Width = width - text_X * 2;
  text_Bottom = height - text_X;
  textSize(width / 15);

  background(120);
  preloadlines(); // AndTheyWalked
}

// function draw() {} not needed

/** mousePressed is main program **/

function mousePressed() {
  randomIndy();
  writeStanza();
}

/**  ************************    **/

function randomIndy() {
  indy = round(random(0, lines.length - 1));
  // console.log('indy = ',indy);
}

function writeStanza() {
  background(120);
  writeLine();
  randomIndy();
  text_Y = text_Y + text_Yincrement;
  writeLine();
  randomIndy();
  text_Y = text_Y + text_Yincrement;
  writeLine();
  text_Y = text_X;
}

function writeLine() {
  // background(120);
  fill(255, 233, 0);
  // textSize(40);
  textAlign(LEFT);
  textWrap(WORD);
  text(lines[indy], text_X, text_Y, text_Width, text_Bottom);
  console.log("indy = ", indy);
}

function preloadlines() {
  // And They Walked
  lines = [
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

// NOTES
// Learned that draw() function is not essential for p5 js
