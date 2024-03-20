//var rouge, bleu, vert;

function setup() {
  createCanvas(400, 400);
  background(255);
  frameRate(4);
  noStroke();
}

function draw() {
  for (var x = 5; x < width; x += 50) {
    //nested loop
    for (var y = 10; y < height; y += 45) {
      fill(
        //random(100, 155),
        0,
        random(100, 150),
        //limiting random range
        random(200, 255),
        150
        //adding alpha to slow variations
      );
      rect(x, y, 45, 40);
    }
  }
}
