let columns = 5; // Number of columns
let tileSize; // Size of each tile
let tiles = []; // Array to store tiles
let score = 0; // Counter for clicked tiles
let gameOver = false;


function game1Setup() {
  createCanvas(750, 400);
  tileSize = width / columns; // Calculate tile size based on canvas width and number of columns
}

function game1Draw() {
  background("#FADAC1");

  fill("#50A3AB");
  ellipse(75, 50, 90, 35, 6);
  textStyle(BOLD);
  textSize(15);
  fill("White");
  
  text("Back", 51, 55);

  if (frameCount % 30 === 0) { // Add a new tile every 30 frames
    let col = floor(random(columns)); // Random column index
    let x = col * tileSize; // Calculate x position based on column index
    let speed = 3;
    let tile = new Tile(x, -30, tileSize, speed); // Create a new tile
    tiles.push(tile); // Add the tile to the array
  }
  
  if (gameOver) {
    // Game over message
    fill(255);
    textSize(32);
    text("Game Over", width / 2, height / 2);
  } else {
    // Update and display tiles
    for (let i = tiles.length - 1; i >= 0; i--) {
      tiles[i].update(); // Update tile position
      tiles[i].display(); // Display tile

      // Check if tile hits the bottom
      if (tiles[i].y > height - tileSize) {
        gameOver = true;
        break;
      }
    }
  }

  // Display score
  fill(255);
  textSize(20);
  text("Score: " + score, 20, 30);
}

function mousePressed() {
  // Check if mouse press intersects with any tile
  for (let i = tiles.length - 1; i >= 0; i--) {
    // Calculate the current position of the tile based on its speed
    let currentY = tiles[i].y + tiles[i].speed * (height / 30); // Assuming 30 frames per second

    if (
      mouseX > tiles[i].x &&
      mouseX < tiles[i].x + tileSize &&
      mouseY > currentY &&
      mouseY < currentY + tileSize
    ) {
      tiles.splice(i, 1); // Remove clicked tile
      score++; // Increment score
      break; // Exit loop once a tile is clicked
    }
  }
}

class Tile {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.color = "#F6723A";
  }

  update() {
    this.y += this.speed; // Move tile down
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
  }
}

function mouseClicked() {
  
  if (mouseX > 560 && mouseX < 620 && mouseY > 85 && mouseY < 125) {
    clear();
    game2Draw(); 
  }
}