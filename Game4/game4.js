let maze = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]
];

let cellSize = 40;
let playerSize = 20;
let playerX;
let playerY;

function setup() {
  let canvas = createCanvas(750, 400);
  canvas.parent('mazeCanvas'); // This will place the canvas inside the 'mazeCanvas' div

  let mazeWidth = maze[0].length * cellSize;
  let mazeHeight = maze.length * cellSize;
  let offsetX = (width - mazeWidth) / 2;
  let offsetY = (height - mazeHeight) / 2;

  playerX = offsetX + cellSize / 2;
  playerY = offsetY + cellSize / 2;
}

function draw() {
  background("#fadac1");
  drawMaze();
  drawPlayer();
}

function keyPressed() {
  let stepSize = 10;
  let newX = playerX;
  let newY = playerY;

  if (keyCode === LEFT_ARROW) {
    newX -= stepSize;
  } else if (keyCode === RIGHT_ARROW) {
    newX += stepSize;
  } else if (keyCode === UP_ARROW) {
    newY -= stepSize;
  } else if (keyCode === DOWN_ARROW) {
    newY += stepSize;
  }

  checkBoundaryAndMove(newX, newY);
}

function checkBoundaryAndMove(newX, newY) {
  let cellX = floor((newX - (width - maze[0].length * cellSize) / 2) / cellSize);
  let cellY = floor((newY - (height - maze.length * cellSize) / 2) / cellSize);

  if (cellX >= 0 && cellX < maze[0].length && cellY >= 0 && cellY < maze.length && maze[cellY][cellX] === 0) {
    playerX = newX;
    playerY = newY;
  } else {
    // Reset player to starting position
    let offsetX = (width - maze[0].length * cellSize) / 2;
    let offsetY = (height - maze.length * cellSize) / 2;
    playerX = offsetX + cellSize / 2;
    playerY = offsetY + cellSize / 2;
  }
}

function drawMaze() {
  let mazeWidth = maze[0].length * cellSize;
  let mazeHeight = maze.length * cellSize;
  let offsetX = (width - mazeWidth) / 2;
  let offsetY = (height - mazeHeight) / 2;

  for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[i].length; j++) {
          if (maze[i][j] === 1) {
              fill(255);
              rect(offsetX + j * cellSize, offsetY + i * cellSize, cellSize, cellSize);
          }
      }
  }
}

function drawPlayer() {
    fill("#50A3AB");
    ellipse(playerX, playerY, playerSize, playerSize);
}