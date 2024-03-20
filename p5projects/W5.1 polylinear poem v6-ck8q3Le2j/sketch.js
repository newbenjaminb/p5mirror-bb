//W5.1 polylinear poem v6

/*** global variables ***/
let poem = [];
let indy1 = 1;
/*************************/
function setup() {
  createCanvas(400, 400);
  fillPoem();
  frameRate(1);
}

/*************************/
function draw() {
  background(120); //avoid overlaps
  textSize(40);
  textAlign(LEFT);
  textWrap(WORD);
  fill(255, 233, 0);
  // indy1 = round(random(0, poem.length - 1));
  indy1=RandomLineNum();
  showOnConsole(poem[indy1]); 
   text(poem[indy1], 30, 40, 340);
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
  return(indexy);
}
function writePoem() {
  text(poem[indy1], 30, 40, 340);
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
