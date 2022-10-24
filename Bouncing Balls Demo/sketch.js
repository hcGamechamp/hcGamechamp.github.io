// Colliding Circles
// Joshua M
// Oct 24, 2022

let theCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  theCircles.push(spawnBall(100, 100));
}

function draw() {
  background(220);
  //move
  for (let i = 0; i<theCircles.length; i++) {
    theCircles[i].x += theCircles[i].dx;
    theCircles[i].y += theCircles[i].dy;
    
    // left-right edges
    if (theCircles[i].x > width || theCircles[i].x - theCircles[i].radius < 0) {
      theCircles[i].dx *= -1;
    }
    if (theCircles[i].y > height || theCircles[i].y - theCircles[i].radius < 0) {
      theCircles[i].dy *= -1;
    }
  }
  //display
  for (let thisCircle of theCircles) {
    fill(thisCircle.theColor);
    circle(thisCircle.x, thisCircle.y, thisCircle.radius*2);
  }
}


function mousePressed()  {
  theCircles.push(spawnBall(mouseX, mouseY));
}

function spawnBall(tempX, tempY) {
  let newBall = {
    x: tempX,
    y: tempY,
    radius: random(25, 100),
    dx: random(-5, 5),
    dy: random(-5, 5),
    theColor: color(random(255), random(255), random(255)),
  };
  return newBall;
}