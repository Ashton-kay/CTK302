let confused, freefalling, superman, watermelon;

function setup() {
  createCanvas(500, 500);
  confused = loadImage("assets/confused.png");
  freefalling = loadImage("assets/freefalling.jpg");
  superman= loadImage("assets/superman.jpg");
  watermelon = loadImage("assets/watermelon.jpg");
  imageMode(CENTER);
}
function draw() {
  background('green');
  image(confused, width/2, height/2, 100, 100);
  image(freefalling, width/2, height/2 -120, 100, 100);
  image(watermelon, width/2, height/2 + 120, 100, 100);

}
