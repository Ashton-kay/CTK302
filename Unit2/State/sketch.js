let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {
      case 0:
      background('white');
      text("Hello",150,150,150,150);
      break;
       case 1:
      background('grey');
      text("I'm stuck in your screen!", 250, 250);
      break;
  case 2:
      background('pink');
      text("case 2", 250, 250);
      break;
  }
  function mouseReleased() {
    state++ ;
    if (state > 2) {
      state = 0 ;
    }
}
