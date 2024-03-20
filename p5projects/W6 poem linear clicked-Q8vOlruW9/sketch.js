// polylinear poem clicked
let indy = 0;
let poem = [];

function setup() {
  createCanvas(400, 400);
  background(120);
  preloadPoem();
}

// function draw() {} // not needed

function mousePressed() {
  // console.log("mousePressed");
  incrementIndy();
  writeLine();
}

function writeLine() {
  background(120);
  fill(255, 233, 0);
  textSize(40);
  textAlign(LEFT);
  textWrap(WORD);
  text(poem[indy], 30, 30, 370, 370);
  console.log("indy = ", indy);
}

function incrementIndy() {
  if (indy < poem.length) {
    indy++;
  } else {
    indy = 0;
  }
  return indy;
}

function preloadPoem() {
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
// surprised that it works without draw() function !
