// https://editor.p5js.org/benjamin.bergery/sketches/-Ef07WL0S
// perlin noise by Qiumeng Fu <

var inc = 0.03;
var scl = 48; // divide width and height to define number of rows and columns
var cols, rows;
var fr; // frame rate
var zoff = 0;

let song;
let amp;
let button;

let volhistory = [];
let ct; 


function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('music.mp3');
}

function setup() {
  createCanvas(480, 480);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP("");
  // floor(n) returns closest integer less than or equal to the value of the parameter

  amp = new p5.Amplitude();
}

function draw() {
  background(255);
  var vol = amp.getLevel();
  var yoff = 0;

  for (var y = 0; y < rows; y++) {
    var xoff = 0;//map(mouseX,0,800,0,1);
    for (var x = 0; x < cols; x++) {
      var index = (x + y * width) * 4;
      var angle = noise(xoff, yoff, zoff) * TWO_PI *4;
      xoff += inc;
      
      var v = p5.Vector.fromAngle(angle);
  // fromAngle(angle) 
  // makes a new 2D vector from an angle 
  // returns a new p5.Vector object
      
      noStroke(0);
      
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      // heading() returns angle of rotation
      
      // insert pixels
      
      fill(0, 0, 255, 100);
      
      //fill(map(vol*2,0,1,0,255), map(vol,0,1,0,200), map(vol,0,1,0,230), map(vol,0,1,50,100));
      
      ellipse(scl,scl,60,30);
      pop();
      
    }
    yoff += inc
    zoff += 0.00008;

  }
  fr.html(floor(frameRate())); 
  //display frame rate
}

// https://editor.p5js.org/fuqiumeng/sketches/pJxXT7h4w
// perlin noise by Qiumeng Fu <

