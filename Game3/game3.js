let exercise3x = 200;
let exercise3y = 200;

function game3Preload(){
  
}

function game3Setup(){
  
}
 draw() {
    image(this.img, this.pos.x, this.pos.y);
  }
  
  hits(hitpos: p5.Vector) {
    if(hitpos.x > this.pos.x && 
       hitpos.x < this.pos.x + this.width && 
       hitpos.y > this.pos.y && 
       hitpos.y < this.pos.y + this.height) {
      return true;
    }
    return false;
  }
}


function game3Draw(){
  clear();
  background("#fadac1");
  
  fill("#50A3AB");
  ellipse(75, 50, 90, 35, 6);
  textStyle(BOLD);
  textSize(15);
  fill("White");
  textFont(mont);
  text("Back",51,55);
  
}

