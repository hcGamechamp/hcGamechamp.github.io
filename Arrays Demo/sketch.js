// Array Demo
// Josh M
// Oct 18, 2022


let theCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

function displayCircles() {
  for (let i = 0; i < theCircles.length; i++) {
    circle(theCircles[i].x, theCircles[i].y, theCircles[i].radius)
  }
}


function spawnCircle() {
  let thisCircle = {
    x: mouseX,
    y: mouseY
    radius: random(25, 75),
    theColor: color(random(255), random(255), random(255))
  };
  theCircles.push(thisCircle);
}