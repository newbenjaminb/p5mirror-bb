// mapping distance from center (mouse)
// to brightness values
// over limited range

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
  noStroke();
  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      // Calculate the distance of this cell to the mouse
      let d = dist(x, y, mouseX, mouseY);
      // Use the distance to color the cell
      let c = map(d, 0, 100, 255, 0);
      fill(c);
      rect(x, y, 10, 10);
    }
  }
}

//https://editor.p5js.org/icm4.0/sketches/MLgJGDH1h