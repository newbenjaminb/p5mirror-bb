let square_width = 100;
let pitch = 50;

function setup() {
  createCanvas(400, 400);
  frameRate(24);
  noStroke();
}

function draw() {
  background(50);
  fill(255, 210, 0, 255);
  // warm yellow
  for (
    let square_x = 50;
    square_x < width - square_width;
    square_x += square_width + pitch
  ) {
   
    for (let square_y = 50; square_y < height - square_width; square_y += square_width + pitch) {
      let flutter = random(-1,0.45);
      square_x = square_x + flutter;
  flutter = random(-0.15, 0.15);
      square_y = square_y + flutter;
      draw_squares(square_x, square_y, square_width);
    }
  }
}

function draw_squares(rleft, rtop, square_width) {
  rect(rleft, rtop, square_width, square_width);
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
