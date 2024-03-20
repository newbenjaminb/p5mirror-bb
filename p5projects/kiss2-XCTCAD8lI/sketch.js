function setup() {
  createCanvas(400, 300);
  // arguments are X and Y pixels
  // createCanvas function in p5 library
}

function draw() {
  background(150,200,255);
  
  rectMode(CENTER)
  // will change rectangles no matter what line number it is placed at
  // unless there was a preceding rectMode command
  
  
  // FACES
  stroke(10)
  //dark outlines
  fill(90,90,220)
  //ble face
  rect(100,150,150)
  // face1 arguments x,y,width 
  
  fill(100,220,100)
  //green face
  rect(300,150,150)
  // face2

  // TONGUES
  stroke(250,0,0)
  rectMode(CORNER)
   fill(220,0,100)
   rect(90,160,180,25)
  // args x,y,width,height
  
  fill(180,0,100,220)
  // rgb and alpha
  // alpha very non-linear
  rect(120,180,180,25)
  // args x,y,width,height
 
 //EYES
  stroke(255)
  line(110,100,160,90)
  line(250,90,290,100)
  strokeWeight(10)
  strokeWeight(2)
  
 
  
  
}