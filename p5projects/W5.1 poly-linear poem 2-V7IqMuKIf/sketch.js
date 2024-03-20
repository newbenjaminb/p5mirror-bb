// W5.1 poly-linear poem 2

// make it a palimpsest with alpha?
let poem = [
  "when he heard",
  "the world was rounded",
  "he was dumb- founded",
  "then flew like a bird",
  "without a word",
  "around the world",
];

function setup() {
  createCanvas(400, 400);
  background(220);
    // console.log('poem.length ' + poem.length);
  // use modulo to make ind integer?
  //console.log(poem[ind]);
}

function draw() {
  mousePressed() {
   fill(random(150, 220), random(100, 150), random(100, 150), 10);
let ind = round(random(0, poem.length - 1));
  textSize(70);
  textAlign(LEFT);
  textWrap(WORD);
  text(poem[ind], 20, 20, 200);
  }
 
  
  
  
  
  
  
  

  //   textSize(72);
  // textAlign(CENTER, CENTER);
  //   text(poem[ind]);
  // text(poem[ind]);
  // ind++; console.log([ind]);
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
