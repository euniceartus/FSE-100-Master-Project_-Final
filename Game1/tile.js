function Tile(x) {
    this.w = 80;
    this.h = 100;
    this.x = x;
    this.y = this.h;
    this.moveSpeed = 5;
  
    this.show = function() {
      strokeWeight(2);
      fill(0, 0, 255);
      rect(this.x, this.y, this.w, this.h);
    }
  
    this.move = function() {
      this.y += this.moveSpeed;
    }
  
    this.clicked = function(x, y) {
      return (x > this.x &&
        x < this.x + this.w &&
        y > this.y &&
        y < this.y + this.h);
    }
  
    this.checkOffScreen = function() {
      if (this.y > height) {
        gameOver();
      }
    }
  }