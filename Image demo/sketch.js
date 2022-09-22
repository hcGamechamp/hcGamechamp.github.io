// Image Demo
// Josh
// Sept 22, 2022

let fishImage;
let scalar = 1;

function preload() {
  fishImage = loadImage("Fish.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
}

function draw() {
  background(220);
  image(fishImage, mouseX, mouseY, fishImage.width*scalar, fishImage.height*scalar);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    scalar = scalar * 1.5;
  }
  else if (keyCode === DOWN_ARROW) {
    scalar = scalar * 0.75;
  }
}
