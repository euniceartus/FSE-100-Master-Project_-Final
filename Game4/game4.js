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
    createCanvas(400, 400);
    textAlign(CENTER, CENTER);
    currentActivity = 4;
    background("#fadac1");
    let mazeWidth = maze[0].length * cellSize;
    let mazeHeight = maze.length * cellSize;
    let offsetX = (width - mazeWidth) / 2;
    let offsetY = (height - mazeHeight) / 2;

    playerX = offsetX + cellSize / 2;
    playerY = offsetY + cellSize / 2;



 

  
  // Hide the Activity 4 button, show all the other buttons
  menuButton.show();
  game1Button.show();
  game2Button.show();
  game3Button.show();
  game4Button.hide();
}

function game4Draw(){
  background("#fadac1");
  
  drawMaze();
  drawPlayer();

  fill("#fadac1");
  rect(10, 10, 100, 25);
  fill("black");
  text("Home Page", 25, 25);
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
    fill("red");
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
