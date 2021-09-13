function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(25, 119, 181 );
  noStroke();
  //sun
  fill('yellow');
  ellipse(630,80,60,60);
  //wings
  fill('pink');
  ellipse(380,200,80,50);
  ellipse(320,200,80,50);
  ellipse(310,170,90,30);
  ellipse(390,170,90,30);
  //body
  fill('black');
  ellipse(350,150,20,20);
  ellipse(350,200,20,100);
  //clouds
  fill ('white');
  ellipse(190,100,50,50);
  ellipse(110,100,50,50);
  ellipse(150,100,80,80);
  ellipse(615,300,80,80);
  ellipse(570,300,50,50);
  ellipse(660,300,50,50);
}
