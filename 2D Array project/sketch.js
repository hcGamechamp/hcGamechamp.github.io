
// Josh M
// Started on Oct 28th, 2022
//
// Extra for Experts:
// - Nothing, didnt have time/just couldnt do it

let state = "selection";
let rows;
let cols;
let cellHeight;
let cellWidth;
let grid;
let victoryMusic;
// let yPos;
// let xPos;
let timer = 0;
let emptyArray = [];

function preload() { // attempted to make music for thw win, didnt have time
  victoryMusic = "Victory.mp3";
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // victoryMusic.volume(0.2);
}

function draw() { // overall calls each function per level of difficulty as well as end screens
  if (state === "selection") {
    background("black");
    createButtons();
    systemCall();
  }
  else if (state === "warm up") {
    displayGrid(grid);
    gameMechanic();
    gameTimer();
    gridCheck();
  }
  else if (state === "easy") {
    displayGrid(grid);
    gameMechanic();
    gameTimer();
    gridCheck();
  }
  else if(state === "average") {
    displayGrid(grid);
    gameMechanic();
    gameTimer();
    gridCheck();
  }
  else if (state === "hard") {
    displayGrid(grid);
    gameMechanic();
    gameTimer();
    gridCheck();
  }
  else if (state === "master") {
    displayGrid(grid);
    gameMechanic();
    gameTimer();
    gridCheck();
  }
  else if (state === "impossible") {
    displayGrid(grid);
    gameMechanic();
    gameTimer();
    gridCheck();
  }
  else if (state === "gameOver") {
    background("white");
    textSize(50);
    fill("black");
    text("You Failed", windowWidth/2, windowHeight/2);
  }
  else if (state === "win") {
    background("black");
    textSize(100);
    fill("white");
    text("You Win!", windowWidth/2, windowHeight/2);
  }
}

function createButtons() { // creates the buttons and gives them color
  if (state === "selection") {
    fill("violet");
    rect(300, 150, 300, 150); // warm up button
    textSize(50);
    fill("white");
    text("Warm Up", 350, 250);

    fill("green");
    rect(800, 150, 300, 150); // easy button
    fill("white");
    textSize(50);
    text("Easy", 875, 250);
    
    fill("orange"); // average button
    rect(300, 375, 300, 150);
    fill("white");
    textSize(50);
    text("Average", 350, 475);

    fill("red"); // hard button
    rect(800, 375, 300, 150);
    fill("white");
    textSize(50);
    text("Hard", 875, 475);

    fill("blue"); // master button
    rect(300, 600, 300, 150);
    fill("white");
    textSize(50);
    text("Master", 375, 700);

    fill("purple"); // impossible button
    rect(800, 600, 300, 150);
    fill("white");
    textSize(50);
    text("Impossible", 835, 700);
  }
}

function systemCall() { // games the system for each button of difficulty, with custome options
  if (state === "selection" && mouseInsideRect(300, 600, 150, 300) && mouseIsPressed) { // top left
    state = "warm up";
    grid = createRandom2dArray(3, 3);
    rows = 3;
    cols = 3;
    cellWidth = width/cols;
    cellHeight = height/rows;
  }
  else if (state === "selection" && mouseInsideRect(800, 1100, 150, 300) && mouseIsPressed) { // top right
    state = "easy";
    grid = createRandom2dArray(5, 5);
    rows = 5;
    cols = 5;
    cellWidth = width/cols;
    cellHeight = height/rows;
  }
  else if (state === "selection" && mouseInsideRect(300, 600, 375, 525) && mouseIsPressed) { // left center
    state = "average";
    grid = createRandom2dArray(8, 8);
    rows = 8;
    cols = 8;
    cellWidth = width/cols;
    cellHeight = height/rows;
  }
  else if (state === "selection" && mouseInsideRect(800, 1100, 375, 525) && mouseIsPressed) { // right center
    state = "hard";
    grid = createRandom2dArray(10, 10);
    rows = 10;
    cols = 10;
    cellWidth = width/cols;
    cellHeight = height/rows;
  }
  else if (state === "selection" && mouseInsideRect(300, 600, 600, 750) && mouseIsPressed) { // bottom left
    state = "master";
    grid = createRandom2dArray(15, 15);
    rows = 15;
    cols = 15;
    cellWidth = width/cols;
    cellHeight = height/rows;
  }
  else if (state === "selection" && mouseInsideRect(800, 1100, 600, 750) && mouseIsPressed) { // bottom right
    state = "impossible";
    grid = createRandom2dArray(30, 30);
    rows = 30;
    cols = 30;
    cellWidth = width/cols;
    cellHeight = height/rows;
  }
}

function displayGrid(grid) { // displays the pattern for the grid
  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}



function createRandom2dArray(cols, rows) { // makes random pattern for grid
  for (let y=0; y<rows; y++) {
    emptyArray.push([]);
    for (let x=0; x<cols; x++) {
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

function gameMechanic() { // allows box clicking, and changing color
  if ((state === "warm up" || state === "easy" || state === "average" || state === "hard" || state === "master" || state === "impossible") && mouseIsPressed) { 
    let xPos = Math.floor(mouseX/cellWidth);
    let yPos = Math.floor(mouseY/cellHeight);

    if (grid[yPos][xPos] === 0) {
      grid[yPos][xPos] = 1;
    }
    // else if (grid[yPos][xPos] === 1) {
    //   grid[yPos][xPos] = 0;
    // }
  }
}

function mouseInsideRect(left, right, top, bottom) { // inside the button sensor
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function gameTimer() { // makes timer limit for each level
  timer++;
  if (state === "warm up") {
    if (timer === 5*60) {
      state = "gameOver";
    }
  }
  else if (state === "easy") {
    if (timer === 9*60) {
      state = "gameOver";
    }
  }
  else if (state === "average") {
    if (timer === 17*60) {
      state = "gameOver";
    }
  }
  else if (state === "hard") {
    if (timer === 26*60) {
      state = "gameOver";
    }
  }
  else if (state === "master") {
    if (timer === 50*60) {
      state = "gameOver";
    }
  }
  else if (state === "impossible") {
    if (timer === 50*60) {
      state = "gameOver";
    }
  }
}

function gridCheck() {  // checks if all are black
  let totalCell = rows * cols;
  let sum = 0;

  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      if (emptyArray[y][x] === 1) {
        sum ++;
      }
    }
  }

  if (sum === totalCell) {
    state = "win";
  } 
  else {
    state = state;
  }
}