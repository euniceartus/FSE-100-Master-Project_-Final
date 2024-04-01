let sound1;

function game1Preload(){
  sound1 = loadSound("sound1.mp3");
}

function game1Setup(){

  // currentActivity = 1;
  
  // Hide the Game 1 button, show all the other navigation buttons
  // menuButton.show();
  // game1Button.hide();
  // game2Button.show();
  // game3Button.show();
  // game4Button.show();
  
  // Set the size of the owl image
  // owlImage.resize(150, 150);
}

function game1Draw(){
  clear();
  background("#fadac1");
  
  textSize(27);
  fill("black")
  textStyle(BOLD);
  text("Activity 1 goes here:",250,50);

  fill("#50A3AB");
  ellipse(75, 50, 90, 35, 6);
  textSize(15);
  fill("Black");
  textFont(mont);
  text("Back",51,55);
  
}


