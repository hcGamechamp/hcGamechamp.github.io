// // First Assignment
// // Josh M
// // Sept 23, 2022
// //
// // Extra for Experts:
// // - describe what you did to take this project "above and beyond"

let cookieImage;
let backgroundImage;
let score = 0;
let secondBackgroundImage;
let thirdBackgroundImage;
let fourthBackgroundImage;
let finalBackgroundImage;

function preload() {
  cookieImage = loadImage("RealCookie.png");
  backgroundImage = loadImage("BlackMarket.jpg");
  secondBackgroundImage = loadImage("Cookiewagon.jpg");
  thirdBackgroundImage = loadImage("cookievan.jpg");
  fourthBackgroundImage = loadImage("cookieStore.jpg");
  finalBackgroundImage = loadImage("cookieIndustry.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // image(backgroundImage, 0, 0, width, height);
  levelUp();
  image(cookieImage, 650, 250);
  changeScore();
  scoreNumber();
  
  // mousePressed();
}

function changeScore() {
  if (mouseInCircle(656, 991, 260, 580)) {
    if (mouseIsPressed) {
      score = score + 1;
    
    }
  }
}


function mouseInCircle(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function scoreNumber() {
  textSize(50);
  text("Cookies:", 1025, 150);
  text(score, 1025, 200);
}


function levelUp() {
  if (0 <= score <= 999) {
    image(backgroundImage, 0, 0, width, height);
  }
  if (1000 <= score <= 2499) {
    image(secondBackgroundImage, 0, 0, width, height);
  }
  if (2500 <= score <= 4499) {
    image(thirdBackgroundImage, 0, 0, width, height);
  }
  if (4500 <= score < 7000) {
    image(fourthBackgroundImage, 0, 0, width, height);
  }
  if (score >= 7000) {
    image(finalBackgroundImage, 0, 0, width, height);
  }
}




// function mousePressed() {
//   console.log(mouseX, mouseY);
// }
