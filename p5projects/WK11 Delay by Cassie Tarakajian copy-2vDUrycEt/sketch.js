/* Delay by Cassie Tarakajian 🙏
https://github.com/ITPNYU/ICM-2019-Media/wiki/Homework-Cassie#week-11

https://p5js.org/reference/#/p5.Delay
Delay is an echo effect. It processes an existing sound source, and outputs a delayed version of that sound.
*/

let thunder;
let bird;
let gong;

let delay;
let sample;
let fft;
let knobPosition;

function preload() {
  thunder = loadSound("sounds/thunder.mp3"); 
 bird = loadSound("sounds/bird.mp3"); 
  gong = loadSound("sounds/gong.mp3"); 
}

function setup() {
  createCanvas(256, 384);
  // try different sample
  sample = bird;
  
  delay = new p5.Delay();
  sample.disconnect();
  delay.process(sample, 0.12, 0.7, 2300);
  
  let button = createButton("Toggle Sample");
  button.mousePressed(function() {
    if (sample.isPlaying()) {
      sample.stop(); 
    } else {
      sample.loop(); 
    }
  });
  
  fft = new p5.FFT(0.8, 256);
  
  delay.delayTime(0.5);
  delay.feedback(0.5);
  delay.filter(5000);
  knobPosition = {
    x: map(0.5, 0, 1, 0, width),
    y: map(0.5, 0.9, 0, 256, height)
  };
}


function draw() {
  background(0);
  let spectrum = fft.analyze();
  let waveform = fft.waveform();
  
  // frequency domain
  stroke("red");
  for(let i = 0; i < spectrum.length; i+=1) {
    line(i, 128, i, 128-(spectrum[i]/2)); 
  }
  
  // time domain
  stroke("blue");
  for (let i = 0; i < waveform.length; i +=1) {
    let sampleHeight = map(waveform[i], -1, 1, -64, 64);
    line(i, 192, i, 192 + sampleHeight);
  }
  
  if (mouseIsPressed && mouseY > 256 && mouseY < height) {
    let feedback = constrain(map(mouseY, 0, height, 0.9, 0), 0, 0.9);
    let time = constrain(map(mouseX, 0, width, 0, 1), 0, 1);
    knobPosition = {
        x: mouseX,
        y: mouseY
      }
    // Set delay (echo) time, in seconds with mouseX
    // 
    delay.delayTime(time);
    // Feedback occurs when Delay sends its signal 
    // back through its input in a loop. The feedback 
    // amount determines how much signal to send each 
    // time through the loop.
    delay.feedback(feedback);
  }
  
  stroke("black");
  fill("white");
  ellipse(knobPosition.x, knobPosition.y, 20);
  
}