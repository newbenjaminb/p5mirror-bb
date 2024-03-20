let myVideo = null;

function setup() {
  createCanvas(400,400);

  myVideo = createCapture(VIDEO, 
    function(stream) {
	
    let p5lm = new p5LiveMedia(this, "CAPTURE", stream, "bb Unique Room")
    // this is the current sketch.jc
    // "CAPTURE" or "CANVAS"
    // stream of video passed to function
    // and its name
    
  	p5lm.on('stream', gotStream);
    // when you receive a stream
    // run function gotStream
    }
  );
}


let otherVideo;
function gotStream(stream, id) {
  otherVideo = stream;
  //otherVideo.id and id are the same and unique identifier
}