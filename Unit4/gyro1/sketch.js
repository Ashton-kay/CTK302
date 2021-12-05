let alpha = 0, beta = 0, gamma = 0
let waldo
let xPosition = 0;
let yPosition = 0;
let x = 0, y = 0, z = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  waldo = loadImage("assets/bunny.png");
  imageMode(CENTER);
  rectMode(CENTER);

}

function draw() {

background('blue');
xPosition = map(gamma, -60, 60, 0, width);
yPosition = map(beta, -30, 30, 0, height);

push();

translate(xPosition, yPosition);

rotate(radians(alpha));

image(waldo, 0, 0, 500, 500);

pop();

fill('white');
noStroke();
textSize(300);
textAlign(CENTER);
text("Find Waldo", width / 2, height / 2);

window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

window.addEventListener("devicemotion", function(e) {
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});

}
