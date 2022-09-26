// Square edge
// Josh
// Sept 26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 0;
let y = 0;
let squareSize = 50;
let speed = 5;
let state = "right";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawSquare();
  moveSquare();
}

function drawSquare() {
  fill("black");
  square(x, y, squareSize);
}

function moveSquare() {
  if (state === "right") {
    x += speed;
    if (x + squareSize >= width) {
      x = width - squareSize; // dont fall of edge
      state = "down";
    }
  }
  if (state === "down") {
    y += speed;
    if (y + squareSize >= height) {
      y = height - squareSize; //don't fall off edge
      state = "left";
    }
}

  if (state === "left") {
    x -= speed;
    if (x <= 0) {
      x = 0; //don't fall off edge
      state = "up";
    }
  }

  if (state === "up") {
    y -= speed;
    if (y <= 0) {
      y = 0; //don't fall off edge
      state = "right";
    }
  }
}

