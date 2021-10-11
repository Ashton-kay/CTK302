let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch(state){
  case 0:
  background('pink');
  text("What do you call a fish with no eyes?", width/2, height/2);
  break;

  case 1:
  background('orange');
  text("fsh", width/2, height/2);
  break;
  }
}

function mouseReleased() {
  state++ ;
  if (state > 1) state = 0 ;
}
