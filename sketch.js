

function setup() {
  createCanvas(750, 400);
}

function preload() {
  mont = loadFont('Montserrat-VariableFont_wght.ttf');
}

function menu() {
  clear();

 
  let radius = 74
  textFont(mont);
  

  background("#FADAC1");
  textSize(15);
  textFont("calibri");
  text("(" + mouseX + ", " + mouseY + ")", 360, 380); //mouse tracker
 
  fill("#50A3AB");
  ellipse(75, 50, 90, 35, 6);
  textSize(15);
  fill("Black");
  textFont(mont);

  text("Settings",51,55);
 
  textSize(27);
  fill("black")
  textStyle(BOLD);
  text("Menu!",315,50);
 
  fill("#F6723A")
  rect1 = rect(25,100,150,150);
  fill("black");
  text("Piano",40,225);

  fill("#F6723A")
  rect2 = rect(200,100,150,150);
  fill("black");
  text("Painting",200,225);

  fill("#F6723A")
  rect3 = rect(375,100,150,150);
  fill("black");
  text("Puzzle",380,225);
 
  fill("#F6723A")
  rect3 = rect(550,100,150,150);
  fill("black");
  text("Maze",560,225);
 
  distance(97,176);
  if ( d < 100){
    fill("black")
    rect(25,100,150,150);
    fill("white");
    text("Piano",40,225);
  }
 
  distance(269,175);
  if ( d < 100){
    fill("black")
    rect(200,100,150,150);
    fill("white");
    text("Painting",200,225);
  }
  distance(445,174);
  if ( d < 100){
    fill("black")
    rect(375,100,150,150);
    fill("white");
    text("Puzzle",380,225);
  }
 
  distance(614,182);
  if ( d < 100){
    fill("black")
    rect(550,100,150,150);
    fill("white");
    text("Maze",560,225);
  }

}


let currentScreen = 0;
function draw(){
  if (currentScreen == 0){
    menu();
  }
  else if (currentScreen == 1){
    page1();
  }
  else if (currentScreen == 2){
    page2();
  }
  else if (currentScreen == 3){
    page3();
  }
  else if (currentScreen == 4){
    page4();
  }
}

function page1(){
  // clear();
  // background("purple");
  // textSize(30)
  // text("PAGE 1",150,70);
  // text("BACK", 250 , 360 )
  game1Setup(); 
  game1Draw();
}

function page2(){
  // clear();
  // background("green");
  // textSize(30)
  // text("PAGE 2",150,70);
  // text("BACK", 250 , 360 )
  game2Preload();
  game2Setup();
  game2Draw();
}

function page3(){
  // clear();
  // background("purple");
  // textSize(30)
  // text("PAGE 3",150,70);
  // text("BACK", 250 , 360 );
  //game3Preload();
  game3Setup();
  game3Draw();
   
}
function page4(){
  mouseMoved();
  game4Preload();
  game4Setup();
  game4Draw();
   
}

let d;
function distance(originX, originY){
  d = Math.sqrt(((originX-mouseX)*(originX-mouseX) + (originY-mouseY)*(originY-mouseY)));
  return d;
 
}

//home page 
function mouseClicked() {
  if (currentScreen == 0 && ((dist(mouseX, mouseY, 90, 170) < 100))){
    currentScreen = 1;  
  }  
  else if (currentScreen == 0 && ((dist(mouseX, mouseY, 271, 174) <= 100) ) ) {
    currentScreen = 2;
  }  
  else if (currentScreen == 0 && ((dist(mouseX, mouseY, 446, 175) <= 100) ) ) {
    currentScreen = 3;
  }  
  else if (currentScreen == 0 && ((dist(mouseX, mouseY, 617, 173) <= 100) ) ) {
    currentScreen = 4;
  }  

  if (currentScreen == 1 && dist(mouseX, mouseY, 74, 52) < 100) {
    currentScreen = 0;
  }
  if (currentScreen == 2 && dist(mouseX, mouseY, 74, 52) < 100) {
    currentScreen = 0;
  }
  if (currentScreen == 3 && dist(mouseX, mouseY, 74, 52) < 100) {
    currentScreen = 0;
  }
  if (currentScreen == 4 && dist(mouseX, mouseY, 74, 52) < 100) {
    currentScreen = 0;
  }
}