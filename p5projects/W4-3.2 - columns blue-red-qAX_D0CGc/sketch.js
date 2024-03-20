// 3-2 columns blue-red
//https://editor.p5js.org/benjamin.bergery/sketches/qAX_D0CGc

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
     
    if (x>=width/2)
    // select right half of canvas
    {
      fill(255,0,0); 
      // color it red
    }
    rect(x,0,width/10,height);
    // create a rectangle
  }
}



//3.2 Make the left half of the columns turn blue and the right half turn red.