// W5.1 poly-linear poem v4
//https://editor.p5js.org/benjamin.bergery/sketches/1DN0kKR9Q
// make it a palimpsest with alpha?
let poem = [
  "when he heard",
  "when she saw",
  "the world was rounded",
  "the rustle of her gown",
  "he was dumbfounded",
  "then flew like a bird",
  "without a word",
  "around the world",
];
let inde;
let innerInde;

function setup() {
  createCanvas(400, 400);
  background(220);

  let x1 = 10;
  let xWide = width - 10;
  let y1 = 10;
  let yHigh = height / 3 - 15;
  let y2 = y1 + yHigh + 10;
  let y3 = y2 + yHigh + 10;
 showOnConsole(y1,y2,y3,yHigh);
  textSize(50);
  textAlign(LEFT);
  textWrap(WORD);
}

function draw() {
  let ind = round(random(0, poem.length - 1));
  fill(random(150, 220), 0, random(150, 220), 255);
  if (mouseIsPressed) {
    textWrap(WORD);
    text(poem[ind], 20, 100);
    // text(poem[ind]);
    // ind++;
    console.log(poem[ind]);
  }
}

function write3lineVerse() {
  for (let lineNum = 1; lineNum < 4; lineNum++) {
    writeLine(lineNum);
  }
}

function writeLine(lineNu) {
  if (lineNu == 1) {
    //text
  }
}

function showOnConsole(a,b,c,d) {
  console.log(round(a)+round(b)+round(c)+round(d));
 // console.log('y1 ='+ round(y1));
 //   console.log('y2 ='+round(y2));
 //    console.log('y3 & bottom = '+round(y3) +' '+(y3+yHigh));  
}


// to begin with
// piece should be a for loop
// with 3 nested loops
// line1,line2,line3
// with 3 separate colors

// NOTES
// mouseIsPressed = boolean true once
// after mouse tap

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
