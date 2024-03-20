// 5 concentric cirles - benjamin
// Wk1 worksheet

function setup() {
createCanvas(600,600);
// arguments are X and Y pixels
}

function draw() {
background(255);
// not necessary but good discipline
stroke(2);

// you have to go from biggest to smallest circle, as they will erase each other
circle(300,300,450);
circle(300,300,350);
circle(300,300,250);
circle(300,300,150);
circle(300,300,50);
}