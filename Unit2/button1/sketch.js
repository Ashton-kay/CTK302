let state = 0 ;
let StartButton2;

function setup() {
  createCanvas(500, 500);
  StartButton2 = loadImage("assets/StartButton2.png");

}

function draw() {

  switch (state) {
      case 0:
      background('white');
      image(StartButton2, 150,150,200,200);
      break;
       case 1:
      background('grey');
      text("case 1", 250, 250);
      break;
  case 2:
      background('pink');
      text("case 2", 250, 250);
      break;
  }

}

function mouseReleased() {
  state++ ;
  if (state > 2) {
    state = 0 ;
  }
}
