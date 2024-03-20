// W6 polylinear poem random line clicked
// https://editor.p5js.org/benjamin.bergery/sketches/B7LBotlDU

let indy = 0;
let poem = [];
let text_Margin, text_Width, text_Bottom;

function setup() {
  createCanvas(1980 / 4, 1080 / 4);

  // height not available before setup
  text_Margin = width / 10;
  text_Width = width - text_Margin * 2;
  text_Bottom = height - text_Margin;
  textSize(width / 10);

  background(120);
  preloadPoem(); // AndTheyWalked
}

// function draw() {} not needed

function mousePressed() {
  // console.log("mousePressed");
  // incrementIndy();
  randomIndy();
  writeLine();
}

function writeLine() {
  background(120);
  fill(255, 233, 0);
  // textSize(40);
  textAlign(LEFT);
  textWrap(WORD);
  text(poem[indy], text_Margin, text_Margin, text_Width, text_Bottom);
  console.log("indy = ", indy);
}

function randomIndy() {
  indy = round(random(0, poem.length - 1));
  // console.log('indy = ',indy);
}

function incrementIndy() {
  // not used in this version
  if (indy < poem.length) {
    indy++;
  } else {
    indy = 0;
  }
  return indy;
}

function preloadPoem() {
  // And They Walked
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

// NOTE
// Learned that draw() function is not essential for p5 js
