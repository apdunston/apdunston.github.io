MazeGame.Player = function(gridLength, squareLength, game) {
  this.x = 0; 
  this.y = 0;
  this.color = "white";
  this.gridLength = gridLength;
  this.game = game;
  this.squareLength = squareLength;
  var shrinkage = 5;
  var size = squareLength - shrinkage;
  this.bump = shrinkage / 2;
  this.square = new DrawableSquare(this.inPixels(this.x), this.inPixels(this.y), size, this.color);
};

MazeGame.Player.prototype.inPixels = function(value) {
  return value * this.squareLength + this.bump;
};

MazeGame.Player.prototype.moveTo = function(x, y) {
  if (!this.game.wallOccupies(x, y)) {
    this.x = x;
    this.y = y;
    this.wrapPosition();
    this.square.setX(this.inPixels(this.x));
    this.square.setY(this.inPixels(this.y));
    this.game.firework();
  } else {
    // bounce
  }      
};

MazeGame.Player.prototype.move = function(direction) {
  if (this.game.validMove(this.x, this.y, direction)) {
    switch(direction) {
      case Gamespace.UP:
        this.y = this.y - 1; break; 
      case Gamespace.DOWN:
        this.y = this.y + 1; break;
      case Gamespace.LEFT:
        this.x = this.x - 1; break;
      case Gamespace.RIGHT:
        this.x = this.x + 1; break;
    }

    this.wrapPosition();
    this.square.setX(this.inPixels(this.x));
    this.square.setY(this.inPixels(this.y));
    this.game.firework();
  } else {
    // bounce
  }      
};

MazeGame.Player.prototype.up = function() { this.move(Gamespace.UP); };
MazeGame.Player.prototype.down = function() { this.move(Gamespace.DOWN); };
MazeGame.Player.prototype.left = function() { this.move(Gamespace.LEFT); };
MazeGame.Player.prototype.right = function() { this.move(Gamespace.RIGHT); };

MazeGame.Player.prototype.wrapPosition = function() {
  if(this.x < 0) {
    this.x = this.gridLength - 1;
  }
  if(this.x > this.gridLength - 1) {
    this.x= 0;
  }
  if(this.y < 0) {
    this.y = this.gridLength - 1;
  }
  if(this.y > this.gridLength - 1) {
    this.y = 0;
  }
}

MazeGame.Player.prototype.isDone = function() { return false; };
MazeGame.Player.prototype.draw = function(canvas, context) { this.square.draw(canvas, context); };
