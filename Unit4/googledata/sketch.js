let rainbow
var bubbles = [];
let url = '';

function setup() {

rainbow = loadImage("assets/rainbow.png")
   //let key = '1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0'; // this is KEY of the URL from the sheet

  let key = '1kiNXBh4tS8M3IYunUDoWz7nwdXN4Fhk6ud3XfAf33WA'; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1" ;  // here I'm making the string for loadJSON.

  loadJSON(url, gotData);



  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects

function gotData(data) {

  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
     bubbles.push(new Bubble(data[i]['Do you like even or odd numbers?'], data[i]["What is your favorite holiday?"], data[i]["How are you today?"])); // THESE NEED TO MATCH SPREADSHEET

  }

}


function draw() {
  background(rainbow);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }

}


// my Bubble class
class Bubble {

  constructor(numbers, holiday, today) { // only the order of these parameters matters!
    this.numbers = numbers;
    this.holiday = holiday;
    this.today = today;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(4, 7), 0);

  }


  display() {

    fill('black');
    text(this.name + "\n" + this.numbers + "\n" + this.holiday + "\n" + this.today, this.pos.x, this.pos.y);

    this.pos.add(this.vel);
    if(this.pos.x > width) this.pos.x = 0
  }


}
