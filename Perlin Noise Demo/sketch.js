// Perlin Noise Demo
// Josh M
// Oct 19, 2022

let x;
let y;
let radius;
let time = 0;

let allCircles = [];

function keyPressed() {
  let theBall = {
    x: random(width),
    y: random(height),
    radius: random(50, 100),
    time: random(5000)
    theColor: color
  };
  allCircles.push(theBall)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  radius = 75;
}

function draw() {
  background(220);
  fill("black");
  
  for (let i = 0; i < allCircles.length; i++) {
    allCircles[i].x = noise(allCircles[i].time) * width;
    allCircles[i].y = noise(allCircles[i]) 

    // increase time along slowly
    time += 0.01;
  }
  

  // circle(x, y, radius*2);
}
