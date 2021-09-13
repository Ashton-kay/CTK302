function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(220);
  noStroke()
  if (mouseIsPressed) {
    text("The Force is strong in you...", 100, 100);
    text("but what if it is too strong?", 400, 400);
    fill(245, 86, 75);
    ellipse(580, 200, 350, 50);
    ellipse(180, 200, 350, 50);
    fill(245, 17, 1);
    ellipse(580, 200, 300, 30);
    ellipse(180, 200, 300, 30);
  } else {
    text("The Force is strong in you...", 100, 100)
    fill(103, 225, 245);
    ellipse(180, 200, 350, 50);
    fill(92, 186, 245);
    ellipse(180, 200, 300, 30);
  }
  fill(103, 225, 245);
  ellipse(180, 200, 350, 50);
  fill(92, 186, 245);
  ellipse(180, 200, 300, 30);
  fill("grey");
  ellipse(369, 200, 160, 50);
  fill("black");
  ellipse(335, 220, 20, 20);
  ellipse(379, 220, 50, 20);
  ellipse(445, 200, 30, 30);
  ellipse(463, 200, 20, 20);
  ellipse(290, 200, 30, 30);
}
