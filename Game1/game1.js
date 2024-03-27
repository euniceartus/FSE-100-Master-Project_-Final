let sound1;

function game1Preload(){
  sound1 = loadSound("sound1.mp3");
}

function game1Setup(){
  background('#fae');
  currentActivity = 1;
  
  // Hide the Game 1 button, show all the other navigation buttons
  menuButton.show();
  game1Button.hide();
  game2Button.show();
  game3Button.show();
  game4Button.show();
  
  // Set the size of the owl image
  owlImage.resize(150, 150);
}

function game1Draw(){
  background('#fae');
  
  fill('black');
  text('Activity 1 goes here', 200, 200);
  image(owlImage, 150, 210);
}
