let state = 0;
let timer = 0;
let mic;
let vol;
let Cow;
let Darcy;
let Goose;
let Luck;
let Obi;
let StartButton;
let Tia;
let White;
//let cake;



function setup() {
  createCanvas(500, 500);

    // code for initializing mic in.
    mic = new p5.AudioIn(); // what does "new" mean?
    mic.start();
    StartButton = loadImage("assets/StartButton.png");
    Cow = loadImage("assets/Cow.png");
    Darcy = loadImage("assets/Darcy.png");
    Goose = loadImage("assets/Goose.png");
    Luck = loadImage("assets/Luck.png");
    Obi = loadImage("assets/Obi.png");
    Tia = loadImage("assets/Tia.png");
    White = loadImage("assets/White.png");

    //cake = loadImage("assets/cake.jpg");
}

function draw() {

  switch(state) {
    case 0:
    background('white');
    image(StartButton, 150,150,300,350)
    //image(cake,200,200,150,150);
    text("Welcome! Please Click on the Start Button",100,100);

    break;

    case 1:
    background('pink');
    image(Darcy,90,5,400,400);
    image(Cow, 150,190,400,400);
    image(Luck, 90, 260,400,400);
    image(Goose,90,200,400,400);
    image(White, 10,100,400,400);
    image(Obi,150,100,400,400);
    text("If you are too loud, you'll scare the cats!",100,100);
    // get the sound input
    vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1
    if(vol > .5){
      state = 2;
    }
    break;

    case 2:
    background('purple');
    text("Oh no! The Cats are gone!",100,100);
    timer++;
    if(timer > 10*60){
      timer = 0;
      state = 0;
    }
    break;
  }

}

function mouseReleased() {
  if(state == 0) ((mouseX > 200) && (mouseX <350) && (mouseY > 200) && (mouseY < 350))
    state = 1;

}

function touchStarted() {
  getAudioContext().resume();
}
