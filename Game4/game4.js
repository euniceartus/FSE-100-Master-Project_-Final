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

function game4Preload(){

}


function game4Setup() {
  createCanvas(750, 400);

  currentActivity = 4;

  let mazeWidth = maze[0].length * cellSize;
  let mazeHeight = maze.length * cellSize;
  let offsetX = (width - mazeWidth) / 2;
  let offsetY = (height - mazeHeight) / 2;

  playerX = offsetX + cellSize / 2;
  playerY = offsetY + cellSize / 2;
  // Hide the Activity 4 button, show all the other buttons
  // menuButton.show();
  // game1Button.show();
  // game2Button.show();
  // game3Button.show();
  // game4Button.hide();
}

function game4Draw(){
  background("#fadac1");
  
  drawMaze();
  drawPlayer();
  text("(" + mouseX + ", " + mouseY + ")", 360, 380);


  fill("#fadac1");
  fill("black");
  text("MAZE GAME", 350, 25);

  fill("#50A3AB");
  ellipse(75, 50, 90, 35, 6);
  textSize(15);
  fill("Black");
  textFont(mont);
  text("Back",51,55);
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

function mouseMoved() {
  let newX = constrain(mouseX, cellSize / 2, width - cellSize / 2);
  let newY = constrain(mouseY, cellSize / 2, height - cellSize / 2);

  let cellX = floor((newX - (width - maze[0].length * cellSize) / 2) / cellSize);
  let cellY = floor((newY - (height - maze.length * cellSize) / 2) / cellSize);

  if (maze[cellY][cellX] === 0) {
      playerX = newX;
      playerY = newY;
  }
}