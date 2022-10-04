// First Assignment
// Josh M
// Sept 23, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cookieImage;
let img;
let backgroundImage;
let score = 0;

function preload() {
  cookieImage = loadImage("RealCookie.png");
  backgroundImage = loadImage("cookieStore.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);
  image(backgroundImage, 0, 0, width, height);
  image(cookieImage, 500, 150);
  mouseClicked();
  mouseInCircle(500, 1025, 400, 700);
}

function mouseClicked() {
  score = score + 1;
}

function mouseInCircle(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function scoreNumber() {
  textSize(50);
  text("Score", 900, 150);
}

