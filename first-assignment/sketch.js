// First Assignment
// Josh M
// Sept 23, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cookieImage;
let img;
let backgroundImage;

function preload() {
  cookieImage = loadImage("RealCookie.png");
  backgroundImage = loadImage("cookieStore.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(backgroundImage, 0, 0, width, height  );
  image(cookieImage, 500, 150);
  
}
