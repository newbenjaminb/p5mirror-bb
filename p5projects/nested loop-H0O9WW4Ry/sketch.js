var rouge,bleu,vert;
function setup() {
  createCanvas(400, 400);
    background(200,100,220);
  frameRate(1);
}

function draw() {
for (var x = 5; x < width; x+= 50){
  //nested loop
for (var y = 10; y < height; y+=50){
fill(random(129,255),random(128,255),0);
    rect(x,y,40,30);
 }
}
}

