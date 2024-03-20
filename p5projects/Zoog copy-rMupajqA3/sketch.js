function setup() {
  // Create drawing canvas
  createCanvas(400, 400);
  
    // Dark gray background
  background(120);
  
  // Purple face
  fill(127, 0, 127);
  ellipse(200, 200, 150, 200);

  // Green eyes
  fill(0, 200, 127);
  ellipse(150, 150, 70, 40);
  ellipse(250, 150, 40, 60);
  
  // Black pupils
  fill(0);
  ellipse(170, 150, 5, 5);
  ellipse(270, 150, 10, 10);

  // Orange eyebrows
  stroke(255, 100, 100);
  strokeWeight(15);
  line(130, 110, 170, 120);
  line(230, 105, 270, 100);

  // Antenna
  stroke(255);
  strokeWeight(5);
  line(200, 125, 200, 50);
  // No fill
  noFill();
  ellipse(200, 40, 20, 20);

  // No stroke
  noStroke();

  // Pink mouth
  fill(255, 0, 127);
  ellipse(200, 250, 50, 20);

  // Black arms
  stroke(0);
  strokeWeight(30);
  line(150, 350, 300, 300);

  // No stroke
  noStroke();

  // Yellow body
  fill(255, 255, 0);
  rect(150, 275, 100, 200);
}
