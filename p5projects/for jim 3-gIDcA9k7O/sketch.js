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
    let square_x = 50;
    square_x < width - square_width;
    square_x += square_width + pitch
  ) {
 
    for (
      let square_y = 50;
      square_y < height - square_width;
      square_y += square_width + pitch
    ) {
      change_X();
      let flutter = random(-0.5, 0.15);
      square_x = square_x + flutter;
      flutter = random(-0.5, 0.5);
      square_y = square_y + flutter;
      // console.log(square_x)
      draw_squares(square_x, square_y, square_width);
    }
  }
}

function change_X() {
  if (mouseX !== pmouseX) {
    mouse_speed = mouseX-pmouseX;
    console.log('mouse_speed = '+mouse_speed);
    flutter = random(-10*mouse_speed, 10*mouse_speed);
    return flutter;
  }
}

//system variable pmouseX always contains the horizontal position of the mouse or finger in the frame previous to the current frame

function draw_squares(rleft, rtop, sq_width) {
  rect(rleft, rtop, sq_width, sq_width);
}

//translate(width / 2, height / 2);
//for (let i = 0; i < 9; i++)

// for (var x = 5; x < width; x += 50) {
//     //nested loop to scan columns
//     for (var y = 5; y < height; y += 45) {
//       randomFill();
//       rect(x, y, 45, 40);
//     }
//   }
