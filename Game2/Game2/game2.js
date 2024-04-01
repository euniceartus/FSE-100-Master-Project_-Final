let exercise2x = 200;
let exercise2y = 200;

function game2Preload() {
  
}

function game2Setup() {
  
}

function game2Draw() {
  clear();
  background("#FADAC1");

fill("white");
rect(200, 80, 450, 450);

fill("#50A3AB");
rect(5, 90, 180, 270);

fill("white");
ellipse(95, 140, 130, 80, 60);


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
  textFont(mont);
  text("Back",51,55);

  fill("grey");
rect(200, 80, 450, 50);

fill("white");
rect(560, 85, 60, 40, 150);
fill("black");
text("Reset", 570, 110);
}