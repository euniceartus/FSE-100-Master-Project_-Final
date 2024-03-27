function game2Preload(){
  
}

function game2Setup(){
  // background('rgba(0,255,0, 0.25)');
  // currentActivity = 2;
  
  // // Hide the Activity 2 button, show all the other buttons
  // menuButton.show();
  // game1Button.show();
  // game2Button.hide();
  // game3Button.show();
  // game4Button.show();
}

function game2Draw(){
  background('rgba(0,255,0, 0.25)');
  clear();
  background('blue');
  
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

function game2MousePressed(){
  
}