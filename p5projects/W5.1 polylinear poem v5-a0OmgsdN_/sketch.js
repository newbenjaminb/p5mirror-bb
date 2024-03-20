//W5.1 polylinear poem v5

/*** global variables ***/
let poem = [];
let indy = 1;
/*************************/
function setup() {
  createCanvas(400, 400);
  fillPoem();
}

/*************************/
function draw() {
  background(120); //avoid overlaps
  textSize(40);
  textAlign(LEFT);
  textWrap(WORD);
  fill(255, 233, 0);
  indy = round(random(0, poem.length - 1));
  showOnConsole(poem[indy]);
  if (keyIsReleased) {
  text(poem[indy], 30, 40, 340);
}
}
/*** global functions ***/


function writePoem() {
  text(poem[indy], 30, 40, 340);
}
function showOnConsole(a) {
  console.log(a);
}

function fillPoem() {
  poem = [
  "when he heard",
  "when she saw",
  "the world was rounded",
  "the rustle of her gown",
  "something moved inside",
  "he was dumb founded",
  "then flew like a bird",
  "without a word",
  "around the world",
  "all the spreads sown",
];   
}
