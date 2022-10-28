// Game of Life
// Josh M
// Oct 27, 2022

let rows = 40;
let cols = 40;
let grid;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/cols;
  cellHeight = height/rows;
  grid = createRandom2dArray(cols, rows);
}

function draw() {
  background(220);
  displayGrid(grid);
}

function keyPressed() {
  if (key === "e") {
    grid = create2dArray(cols, rows);
  }
  if (key === " ") {
    grid = takeTurn(grid);
  }
}

function takeTurn(grid) {
  let nextTurn = create2dArray(cols, rows);

  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      let neighbours = 0;

      // look at all cells around this one...
      for (let i=-1; i<=1; i++) {
        for (let j=-1; j<=1; j++) {
          //edge case check
          if (y+i >= 0 && y+i < rows && x+j >= 0 && x+j < cols) {
            neighbours += grid[y+i][x+j];
          }
        }
      }
      //dont count self
      neighbours -= grid[y][x];
      
      //apply rules
      if (grid[y][x] === 1) { //alive
        if (neighbours === 2 || neighbours === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
      if (grid[y][x] === 0) { //dead
        if (neighbours === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
    }
  }

  return nextTurn;
}

function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] === 1;
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] === 0;

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

function create2dArray(cols, rows) {
  let emptyArray = [];
  for (let y=0; y<rows; y++) {
    emptyArray.push([]);
    for (let x=0; x<cols; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
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