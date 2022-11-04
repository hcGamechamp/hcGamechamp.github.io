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

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (state === "selection") {
    background("black");
    createButtons();
  }
  mousePressed();
}

function createButtons() {
  if (state === "selection") {
    fill("grey");
    rect(300, 150, 300, 150); // warm up button
    textSize(50);
    fill("white");
    text("Warm Up", 350, 250);

    fill("grey");
    rect(800, 150, 300, 150); // easy button
    fill("white");
    textSize(50);
    text("Easy", 875, 250);
    
    fill("grey"); // average button
    rect(300, 375, 300, 150);
    fill("white");
    textSize(50);
    text("Average", 350, 475);

    fill("grey"); // hard button
    rect(800, 375, 300, 150);
    fill("white");
    textSize(50);
    text("Hard", 875, 475);

    fill("grey"); // master button
    rect(300, 600, 300, 150);
    fill("white");
    textSize(50);
    text("Master", 375, 700);

    fill("grey"); // impossible button
    rect(800, 600, 300, 150);
    fill("white");
    textSize(50);
    text("Impossible", 835, 700);
  }
}

function systemCall() {
  if (warmUpBotton === "run") {
    createRandom2dArray(3, 3);
  }
  else if (easyButton === "run") {
    createRandom2dArray(5, 5);
  }
  else if (averageButton === "run") {
    createRandom2dArray(8, 8);
  }
  else if (hardButton === "run") {
    createRandom2dArray(10, 10);
  }
  else if (masterButton === "run") {
    createRandom2dArray(15, 15);
  }
  else if (impossibleButton === "run") {
    createRandom2dArray(30,30);
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
  if (state === "selection" && createButtons()) {
    state = "run";
  }
  else if (state === "run") { 
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
