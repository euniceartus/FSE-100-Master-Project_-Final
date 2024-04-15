let exercise2x = 200;
let exercise2y = 200;
let drawing = false; // Added to manage drawing state
let currentColor = "black";

function game2Preload() {
  // Preload assets if any (e.g., fonts, images)
}

function game2Setup() {
  // Assuming the canvas size remains the same
}

function game2Draw() {
  // No need to clear the screen every frame to allow drawing
  background("#FADAC1");

  fill("white");
  rect(200, 80, 450, 450);

  fill("white");
  rect(140, 10, 540, 60, 150);
  fill("Black");
  textSize(35);
  textStyle(BOLD);
  text("Finger Painting Game", 200, 50);

  fill("#50A3AB");
  ellipse(75, 50, 90, 35, 6);
  textStyle(BOLD);
  textSize(15);
  fill("White");
  
  text("Back", 51, 55);

  fill("grey");
  rect(200, 80, 450, 50);

  fill("white");
  rect(560, 85, 60, 40, 150);
  fill("black");
  text("Reset", 570, 110);

  

  fill("White");
  textSize(20);
  text("Drawing Canvas", 210, 110);

  if (drawing) {
    fill(0); 
    ellipse(mouseX, mouseY, 10, 10); 
  }
}

function mouseDragged() {
  
  if (mouseX > 200 && mouseX < 650 && mouseY > 130 && mouseY < 530) {
    drawing = true;
  } else {
    drawing = false;
  }
}

function mouseReleased() {
  
  drawing = false;
}

function mouseClicked() {
  
  if (mouseX > 560 && mouseX < 620 && mouseY > 85 && mouseY < 125) {
    clear();
    game2Draw(); 
  }
}