state = 0
let blackspace;
let mysteryjedi;
let purplespace;

function setup() {
  createCanvas(500, 500);
  masterjedi = loadImage("assets/masterjedi.png");
  mysteryjedi = loadImage("assets/mysteryjedi.png");
  purplespace = loadImage("assets/purplespace.png");
}

function draw() {
  background(purplespace);
  //  background(blackspace);
    if (mouseIsPressed){
    image(mysteryjedi, width /250, height / 250, 500, 400);
  }
}
