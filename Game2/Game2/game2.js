let exercise2x = 200;
let exercise2y = 200;

function game2Preload() {
  
}

function game2Setup() {
  
}

function game2Draw() {
  clear();
  background("#FADAC1");

  // Drawing canvas
  fill("white");
  rect(100, 100, 500, 300);

  // Toolbar
  fill("#e6e6e6");
  rect(50, 10, 700, 40);

  // Color palette
  fill("#50A3AB");
  rect(100, 15, 30, 30);
  fill("#F79D84");
  rect(150, 15, 30, 30);
  fill("#A8D0E6");
  rect(200, 15, 30, 30);
  // Add more color options as needed

  // Brush size selection
  fill("black");
  ellipse(650, 100, 20, 20); // Small brush
  ellipse(677, 100, 30, 30); // Medium brush
  ellipse(715, 100, 40, 40); // Large brush

  // Tool selection
  fill("black");
  rect(700, 150, 30, 30); // Pen tool
  rect(700, 200, 30, 30); // Eraser tool
  // Add more tools as needed

  // Text
  textSize(27);
  fill("black");
  textStyle(BOLD);
  text("Finger Painting Game", 250, 30);

  textSize(15);
  fill("black");
  textStyle(BOLD);
  text("Brush Size", 600, 70);

  textSize(15);
  fill("black");
  textStyle(BOLD);
  text("Edit", 600, 1500);

  fill("#50A3AB");
  ellipse(75, 50, 90, 35, 6);
  textSize(15);
  fill("Black");
  textFont(mont);

  text("Back",51,55);

  // Reset button
  fill("#FF7F7F");
  rect(600, 10, 70, 30);
  fill("white");
  textSize(15);
  text("Reset", 615, 30);
}