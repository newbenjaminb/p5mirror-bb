// AND THEY WALKED
//W6 Polylinear Poem clicked

/*** global variables ***/
let poem = [];
let indy = 0;
let topTextLeft, bottomTextLeft, bottomTextRight;

/*************************/
function setup() {
  createCanvas(400, 400);
  topTextLeft = 30;
  bottomTextRight = height - topTextLeft;
  loadPoem();
}

function draw() {
  background(220);
}

/*** external functions ***/

function mousePress() {
// indy=round(random(0,poem.length-1));
//   console.log('indy',indy);
 
  fill(255, 233, 0); //yellow
  textSize(40);
  textAlign(LEFT);
  textWrap(WORD);
  // text(poem[indy], topTextLeft, topTextLeft, width-topTextLeft*2, bottomTextRight);
  text(poem[1],30,30,340,340);
}

function random_Index(indexy) {
  
}

// function writeLine() {
//   fill(255, 233, 0); //yellow
//   textSize(40);
//   textAlign(LEFT);
//   textWrap(WORD);
//   text(poem[indy], topTextLeft, topTextLeft, topTextLeft, bottomTextRight);
// }

function loadPoem() {
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
    "wine bottle spilled",
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
    "they were whispering",
    "wet clothes by the river",
    "wet skins shining",
    "they swam in moonlight",
    "feeling the currents pull",
    "the dark ripples tugging",
    "diving into dark water",
    "splash in forest night",
    "they floated below the moon",
  ];
}
