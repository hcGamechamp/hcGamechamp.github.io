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
    background("blue");
  }
}

function createButtons() {
  if (state === "selection") {
    rect(300, 300, 700, 150);
    fill("black");
    rect(800, 300,);
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
  if (state === "selection" && mouseInsideRect(400, 700, 150, 550) || mouseInsideRect(700, 1000, 150, 550)) {
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
