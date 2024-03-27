let exercise2x = 200;
let exercise2y = 200;

function game2Preload(){
  
}

function game2Setup(){
  // background(220);
  // currentActivity = 3;
  
  // // Hide the Activity 3 button, show all the other buttons
  // menuButton.show();
  // game1Button.show();
  // game2Button.show();
  // game3Button.hide();
  // game4Button.show();
  
  // stroke(0);
  // fill("red");
  // circle(100,100, 200);
  // fill("blue");
  // rect(200,0, 200,200);
  // fill("green");
  // circle(300,300, 200);
  // fill("yellow");
  // rect(0,200, 200,200);
  // noStroke();
}

function game2Draw(){
  background('rgba(0,255,0, 0.25)');
  clear();
  background('red');
  
  textSize(27);
  fill("black")
  textStyle(BOLD);
  text("Activity 2 goes here:",250,50);

  fill("#50A3AB");
  ellipse(75, 50, 90, 35, 6);
  textSize(15);
  fill("Black");
  textFont(mont);
  text("Back",51,55);
}