// Chess Board
// Josh
// Sept 19, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawchessboard();
}
function drawchessboard() {
  let cellWidth = width/8;
  let cellHeight = height/8;
  if (cellWidth > cellHeight) {
    cellWidth = cellHeight;
  }
  else {
    cellHeight = cellWidth;
  }

  let iswhite = true;
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if (iswhite) {
        fill("white");
      }
      else {
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      iswhite = !iswhite;
    }
    iswhite = !iswhite;
  }
}
