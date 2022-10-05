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
let state = "game";

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
  changeScore();
  mouseInCircle(cookieImage.width, cookieImage.height);
  scoreNumber();
}

function changeScore() {
  if (state === "game" && mouseInCircle(cookieImage.width, cookieImage.height) && mouseIsPressed) {
    score = score + 1;
  }
}

function mouseInCircle(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function scoreNumber() {
  textSize(50);
  text("Score:", 1025, 150);
  text(score, 1025, 200);
}

