// W5.1 poly-linear poem

// make it a palimpsest with alpha?
let poem = [
  "when he heard",
  "the world was rounded",
  "he was dumbfounded",
  "then flew like a bird",
  "without a word",
  "around the world",
];

function setup() {
  createCanvas(400, 400);
  background(220);
    textSize(72);
textAlign(CENTER, CENTER);
  // console.log('poem.length ' + poem.length);
  // use modulo to make ind integer?
  //console.log(poem[ind]);
}

function draw() {
  let ind = round(random(0, poem.length - 1));
  //console.log(ind);
  console.log(poem[ind]);
  fill(random(150, 220), 0, random(150, 220), 20);
  // if (mouseIsPressed) {
  textSize(72);
textAlign(CENTER, CENTER);
  text(poem[ind]);
  // text(poem[ind]);
  // ind++;
  console.log([ind]);
  // }
}

// Create an array of values (colors, jokes, parts of a story, fortunes, exercise moves, etc.) and program your sketch so that every mouse press iterates forward through the array and displays the values sequentially on the canvas. HINT: For what array property will you need to use a variable?
// index will move through the array

//text(str, x, y, [x2], [y2])
//str String|Object|Array|Number|Boolean: the alphanumeric symbols to be displayed
//x y coordinates of text
//x2 Number, y2 Number by default, width, height of the text box, see rectMode() for more info (Optional)
// rectMode(CENTER);

// need text function
//let s = 'The quick fox jumped the lazy dog';
//fill(50);
//text(s, 10, 10, 70, 80);
// Text wraps within text box
