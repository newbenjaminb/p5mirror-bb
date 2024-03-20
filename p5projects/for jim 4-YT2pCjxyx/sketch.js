// Sketch for jim
// sensitive squares

let square_width = 100;
let pitch = 50;
let mouse_speed;

function setup() {
  createCanvas(400, 400);
  frameRate(24);
  noStroke();
}

function draw() {
  background(50);
  fill(255, 210, 0, 240);
  // warm yellow
 
  for (
    let corner_x = 50;
    corner_x < width - square_width;
    corner_x += square_width + pitch
  ) {
 
    for (
      let corner_y = 50;
      corner_y < height - square_width;
      corner_y += square_width + pitch
    ) {
      
      let flutter = moving_X();
      corner_x = corner_x + flutter;
      
      flutter = random(-0.5, 0.5);
      corner_y = corner_y + flutter;
 
      draw_squares(corner_x, corner_y, square_width);
    }
  }


     createSpan("click on canvas to move the shape"); let diam;
  // createSlider(min, max, [value], [step])
  createSlider(0, 400, diam).input(function() {
    diam = this.value();  });
}

//+++ functions +++// 

function moving_X() {
  if (mouseX !== pmouseX) {
    mouse_speed = (mouseX-pmouseX)/7;
    console.log('mouse_speed = '+mouse_speed);
    flutter = random(-1*mouse_speed, 1*mouse_speed);
  }
  else {flutter=random(-0.15, 0.15);
       }
  return flutter;
  console.log("flutter = " + flutter);
}


function draw_squares(rleft, rtop, sq_width) {
  rect(rleft, rtop, sq_width, sq_width);
}


// NOTES

//system variable pmouseX always contains the horizontal position of the mouse or finger in the frame previous to the current frame

//translate(width / 2, height / 2);
//for (let i = 0; i < 9; i++)

// for (var x = 5; x < width; x += 50) {
//     //nested loop to scan columns
//     for (var y = 5; y < height; y += 45) {
//       randomFill();
//       rect(x, y, 45, 40);
//     }
//   }
