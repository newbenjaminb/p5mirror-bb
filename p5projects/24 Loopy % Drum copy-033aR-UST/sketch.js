// Array of sounds
let sounds = [];
// Moving the rectangle across the screen
let x = 0;
// Height of each drum row
let h = 0;

// Load all the sounds
function preload() {
  for (let s = 0; s < 7; s++) {
    sounds.push(loadSound('data/' + s + '.mp3'));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Calculate the h of each drum row once
  h = height / sounds.length;
  noStroke();
}

function draw() {
  // Move across the screen
  x++;
  // When we get to the right edge, start over
  if (x > width) {
    background('white');
    x = 0;
  }


  fill('black');
  
  let beat = 60;
  for (let s = 0; s < 7; s++) {
    // Use multiply beat by s
    if (frameCount % (beat * (s + 1)) == 1) {
      sounds[s].play();
      let y = s * h;
      rect(x, y, 5, 10);
    }
  }


  // let beat = 300;
  // for (let s = 0; s < 7; s++) {
  //   // Make it more random
  //   //beat += floor(random(s*sounds.length));
  //   // Divide beat by s
  //   if (frameCount % (beat / (s + 1)) == 1) {
  //     sounds[s].play();
  //     let y = s * h;
  //     rect(x, y, 5, 10);
  //   }
  // }

}