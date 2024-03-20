// W6 CHECK VARIABLE SCOPE with console log
// tip from jht1493
// if you are unsure whether a variable is working inside your external function
// check it with console.log

// IMPORTANT p5js variables cannot be used ahead of setup() function


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  Global_Function();
}

function Global_Function() {
 console.log('width', width);
}