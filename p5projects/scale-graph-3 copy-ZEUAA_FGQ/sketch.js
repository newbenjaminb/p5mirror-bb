
// play 3 scales and graph amplitude using layers
// Use song.x/yoffset to relocate on mousePressed
// removed unnecessary translate
let a_songs = [];
let a_volume = 0.5;
let song_list = [
  { path: 'media/song0.m4a', color: 'red', weight: 8 },
  { path: 'media/song1.m4a', color: 'green', weight: 4 },
  { path: 'media/song2.m4a', color: 'yellow', weight: 2 },
];
let song_index = -1;
let selected_song_index = 0;

function setup() {
  createCanvas(400, 400).mousePressed(mousePressed_canvas);
  angleMode(DEGREES);
  load_next();
  // create_ui();
}

function mousePressed_canvas() {
  console.log('mousePressed_canvas selected_song_index', selected_song_index)
  let song = a_songs[selected_song_index];
  selected_song_index = (selected_song_index+1) % a_songs.length;
  song.xoffset = mouseX;
  song.yoffset = mouseY;
}

function load_done() {
  create_ui();
}

function draw() {
  background(0);
  for (let song of a_songs) {
    song.graph();
    image(song.layer, 0, 0);
  }
}

function playAll() {
  for (let song of a_songs) {
    song.play();
  }
}

function performAll(func, state) {
  for (let song of a_songs) {
    song[func](state);
  }
}

function create_ui() {
  create_button_row('play');
  create_button_row('pause');
  create_button_row('stop');
  create_button_row('loop');
  createButton('playAll').mousePressed(function () {
    playAll();
  });
  createButton('pauseAll').mousePressed(function () {
    performAll('pause');
  });
  createButton('loopAll').mousePressed(function () {
    performAll('loop');
  });
  createButton('stopAll').mousePressed(function () {
    performAll('stop');
  });
  createButton('loopAllOff').mousePressed(function () {
    performAll('setLoop', false);
  });
}

function create_button_row(btn_func) {
  for (let index = 0; index < a_songs.length; index++) {
    let label = btn_func + index;
    createButton(label).mousePressed(function () {
      console.log('mousePressed ' + label + ' index', index);
      let song = a_songs[index];
      song[btn_func]();
    });
  }
  // createButton('play0').mousePressed(function () {
  //   a_songs[0].play();
  // });
  // createButton('play1').mousePressed(function () {
  //   a_songs[1].play();
  // });
  // createButton('play2').mousePressed(function () {
  //   a_songs[2].play();
  // });
  createDiv();
}

function load_next() {
  song_index++;
  if (song_index >= song_list.length) {
    console.log('load_next done');
    load_done();
    return;
  }
  let song_file = song_list[song_index].path;
  // console.log('song_index', song_index);
  loadSound(song_file, sound_loaded);
}

function sound_loaded(arg_song) {
  let song = arg_song;
  // console.log('sound_loaded arg_song', arg_song);
  // a_song.play();
  song.setVolume(a_volume);
  // console.log('sound_loaded song_file', song_file);
  // console.log('a_song.duration()', a_song.duration());
  // a_song.loop();
  console.log('song_index', song_index);
  let asong = song_list[song_index];
  let color = asong.color;
  let weight = asong.weight;
  let sp = new SongPlayer(song, song_index, color, weight);
  a_songs[song_index] = sp;
  load_next();
}

class SongPlayer {
  constructor(song, index, color, weight) {
    this.song = song;
    this.index = index;
    this.color = color;
    this.weight = weight;
    this.volhistory = [];
    this.layer = createGraphics(width, height);
    this.amp = new p5.Amplitude();
    this.amp.setInput(this.song);
    this.xoffset = this.layer.width / 2;
    this.yoffset = this.layer.height / 2;
  }
  play() {
    this.song.play();
  }
  stop() {
    this.song.stop();
  }
  loop() {
    this.song.loop();
  }
  pause() {
    this.song.pause();
  }
  setLoop(state) {
    this.song.setLoop(state);
  }
  graph() {
    let amp = this.amp;
    let volhistory = this.volhistory;
    let layer = this.layer;
    let vol = amp.getLevel();
    // console.log('index', this.index, 'vol', vol);
    volhistory.push(vol);
    // Clear the buffer so that when imaged will be layered
    layer.clear();
    // layer.background(0);
    layer.strokeWeight(this.weight);
    layer.stroke(this.color);
    layer.noFill();
    // layer.push();
    // let nx = layer.width / 2 + this.xoffset;
    // let ny = layer.height / 2 + this.yoffset;
    // layer.translate(nx, ny);
    layer.beginShape();
    let n = volhistory.length;
    for (let i = 0; i < n; i++) {
      // map(value, start1, stop1, start2, stop2
      let vol = volhistory[i];
      let r = map(vol, 0, 1, 10, layer.width * 8);
      let x = r * cos(i);
      let y = r * sin(i);
      layer.vertex(x + this.xoffset, y + this.yoffset);
      // console.log('index', this.index, 'vol', vol, 'x', x, 'y', y);
    }
    layer.endShape();
    // layer.pop();
    if (volhistory.length > 360) {
      volhistory.splice(0, 1);
    }
  }
}

// https://editor.p5js.org/jht1493/sketches/BnkIJwE5R
// 17.1_playMode ui edit visual

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// const iterable = [10, 20, 30];
// for (let value of iterable) {
//   value += 1;
//   console.log(value);
// }
// 11
// 21
// 31

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// const obj = { a: 1 };
// const copy = Object.assign({}, obj);
// console.log(copy); // { a: 1 }

//https://editor.p5js.org/jht1493/sketches/QWKytZi9v
