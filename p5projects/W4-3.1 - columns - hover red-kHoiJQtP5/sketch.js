// Wk-3 Columns hover red
//https://editor.p5js.org/benjamin.bergery/sketches/kHoiJQtP5

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // background(220); not needed
  
  for (let x=0;x<=width;x+=width/20) 
  // in each column 
  { 
      fill(0,128,255);
    // color it blue
    if (mouseX > x && mouseX < x+width/20) 
    // if mouseX is in the column
    {
      fill(255,0,0); 
      // color the next rectangle red
    }
    rect(x,0,width/10,height);
    // create a rectangle
  }
}




//Part1 - Create 20 columns that turn red when you hover over them


