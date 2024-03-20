// AND THEY WALKED
//W5.1 polylinear poem v10
// https://editor.p5js.org/benjamin.bergery/sketches/b_R02RoGb

/*** global variables ***/
let poem = [];
let indy1, indy2, indy;
let x = 30; // left of text
let y = 340; // bottom of text

/*************************/
function setup() {
  createCanvas(400, 400);
  loadPoem();
  frameRate(1);
  fill(255, 233, 0);
}

/*************************/
function draw() {
  background(120); //avoid overlaps
  textSize(40);
  textAlign(LEFT);
  textWrap(WORD);
  noStroke();
  fill(255, 233, 0); // yellow

  indy1 = RandomLineNum();
  indy2 = RandomLineNum();
  indy3 = RandomLineNum();

  text(poem[indy1], x, 40, y);
  text(poem[indy2], x, 150, y);
  text(poem[indy3], x, 260, y);
 if (mouseIsPressed === true) {
  fill(220);
    rect(30, 370, 340, 340);
     let icounto = 0;
  while (icounto < 30000) {
    noLoop();
   icounto++;
   console.log("icounto = ", icounto);
    loop();
   }
}

  /*** global functions ***/

  function mousePressed() {
    // background(0);
    fill(220);
    rect(30, 370, 340, 340);
    let icounto = 0;
    while (icounto < 30000) {
      noLoop();
      icounto++;
      console.log("icounto = ", icounto);
      loop();
    }
  }

  function RandomLineNum(indexy) {
    indexy = round(random(0, poem.length - 1));
    return indexy;
  }

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

