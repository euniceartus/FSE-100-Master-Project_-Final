// function Tile(x) {
//   this.w = 80;
//   this.h = 100;
//   this.x = x;
//   this.y = this.h;
//   this.moveSpeed = 5;

//   this.show = function() {
//     strokeWeight(2);
//     fill(0, 0, 255);
//     rect(this.x, this.y, this.w, this.h);
//   }

//   this.move = function() {
//     this.y += this.moveSpeed;
//   }

//   this.clicked = function(x, y) {
//     return (x > this.x &&
//       x < this.x + this.w &&
//       y > this.y &&
//       y < this.y + this.h);
//   }

//   this.checkOffScreen = function() {
//     if (this.y > height) {
//       gameOver();
//     }
//   }
// }

function game1Draw(){
  clear();
  background("#fadac1");
  
  textSize(27);
  fill("black")
  textStyle(BOLD);
  text("Activity 3 goes here:",250,50);

  fill("#50A3AB");
  ellipse(75, 50, 90, 35, 6);
  textSize(15);
  fill("Black");
  textFont(mont);
  text("Back",51,55);
}

