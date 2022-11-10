// 2D Array Project, Speed Test
// Josh M
// Started on Oct 28th, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = "selection";
let rows;
let cols;
let cellHeight;
let cellWidth;
let grid;
let victoryMusic;

function preload() {
  victoryMusic = "Victory.mp3";
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // victoryMusic.volume(0.2);
}

function draw() {
  if (state === "selection") {
    background("black");
    createButtons();
    systemCall();
  }
  else if (state === "warm up") {
    background("red");
    displayGrid(grid);
  }
  else if (state === "easy") {
    displayGrid(grid);
  }
  else if(state === "average") {
    displayGrid(grid);
  }
  else if (state === "hard") {
    displayGrid(grid);
  }
  else if (state === "master") {
    displayGrid(grid);
  }
  else if (state === "impossible") {
    displayGrid(grid);
  }
}

function createButtons() {
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

function systemCall() {
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
    createRandom2dArray(8, 8);
    rows = 8;
    cols = 8;
    cellWidth = width/cols;
    cellHeight = height/rows;
  }
  else if (state === "selection" && mouseInsideRect(800, 1100, 375, 525) && mouseIsPressed) { // right center
    state = "hard";
    createRandom2dArray(10, 10);
    rows = 10;
    cols = 10;
    cellWidth = width/cols;
    cellHeight = height/rows;
  }
  else if (state === "selection" && mouseInsideRect(300, 600, 600, 750) && mouseIsPressed) { // bottom left
    state = "master";
    createRandom2dArray(15, 15);
    rows = 15;
    cols = 15;
    cellWidth = width/cols;
    cellHeight = height/rows;
  }
  else if (state === "selection" && mouseInsideRect(800, 1100, 600, 750) && mouseIsPressed) { // bottom right
    state = "impossible";
    createRandom2dArray(30, 30);
    rows = 30;
    cols = 30;
    cellWidth = width/cols;
    cellHeight = height/rows;
  }
}

function displayGrid(grid) {
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



function createRandom2dArray(cols, rows) {
  let emptyArray = [];
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

function mousePressed() {
  if (state === "run") { 
    let xPos = Math.floor(mouseX/cellWidth);
    let yPos = Math.floor(mouseY/cellHeight);

    if (grid[yPos][xPos] === 0) {
      grid[yPos][xPos] = 1;
    }
    else if (grid[yPos][xPos] === 1) {
      grid[yPos][xPos] = 0;
    }
  }
}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}
