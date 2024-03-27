let exercise3x = 200;
let exercise3y = 200;

function game2Preload(){
  
}

function setup() {
    createCanvas(400, 400);
    urrentActivity = 2;
  }
  
  // Hide the Activity 3 button, show all the other buttons
  menuButton.show();
  game1Button.show();
  game2Button.hide();
  game3Button.show();
  game4Button.show();


function game2Draw(){
    background("#FFC0CB");

  exercise2x = exercise2x + random(4) - 2;
  exercise2y = exercise2y + random(4) - 2;
  
  fill(220);
  circle(exercise2x, exercise2y, 10);

  noStroke();
  fill("#D7306A");
    rect(0,0,50,50);
  fill("#D7306A");
    rect(50,50,50,50);
  fill("#D7306A");
    rect(100,100,50,50);
  
  fill("#D7306A");
    rect(350,0,50,50);
  fill("#D7306A");
    rect(300,50,50,50);
  fill("#D7306A");
    rect(250,100,50,50);
  
  fill("#D7306A");
    rect(350,350,50,50);
  fill("#D7306A");
    rect(300,300,50,50);
  fill("#D7306A");
    rect(250,250,50,50);
  
  fill("#D7306A");
    rect(0,350,50,50);
  fill("#D7306A");
    rect(50,300,50,50);
  fill("#D7306A");
    rect(100,250,50,50);
  
  fill("#D7306A");
    rect(150,150,100,100);
  
  fill("white");
    circle(50,50,20);
  fill("white");
    circle(350,350,20);
  fill("white");
    circle(350,50,20);
  fill("white");
    circle(50,350,20);
  
  fill("white");
    circle(0,0,20);
  fill("white");
    circle(400,400,20);
  fill("white");
    circle(0,400,20);
  fill("white");
    circle(400,0,20);
  
  fill("white");
    circle(300,300,20);
  fill("white");
    circle(100,100,20);
  fill("white");
    circle(300,100,20);
  fill("white");
    circle(100,300,20);
  
  fill("white");
    circle(250,250,20);
  fill("white");
    circle(150,150,20);
 fill("white");
    circle(250,150,20);
  fill("white");
    circle(150,250,20);
  
  
  fill("#D7306A");
    circle(150,150,100);
  fill("#D7306A");
    circle(250,150,100);
  fill("#D7306A");
    circle(250,250,100);
  fill("#D7306A");
    circle(150,250,100);
   
  fill("white");
  circle(200,200,20);
 

}