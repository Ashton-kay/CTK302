let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {
    case 0:
      background('pink');
      text("Why don't scientists trust atoms?", width / 2, height / 2);
      break;

    case 1:
      background('orange');
      text("because they make everything up.", width / 2, height / 2);
      break;
  }
  timer++;
  if (timer > 3 * 60) {
    timer = 0;
    state++;
    if (state > 1) state = 0;
  }
}

function mouseReleased() {
  state++;
  if (state > 1) state = 0;
}
