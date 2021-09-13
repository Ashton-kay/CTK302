function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  fill(0,random(200),0);
  noStroke();
  ellipse(mouseX,mouseY,random(100),random(100));
}
