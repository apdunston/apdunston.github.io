MazeGame.Player = function(gridLength, squareLength, game) {
  this.x = 3; 
  this.y = 3;
  this.color = "white";
  this.gridLength = gridLength;
  this.game = game;
  this.squareLength = squareLength;
  var size = squareLength - squareLength / 10;
  this.square = new DrawableSquare(this.x * squareLength, this.y * squareLength, size, this.color);
};

MazeGame.Player.prototype.moveTo = function(x, y) {
  if (this.game.wallOccupies(x, y)) {
    this.x = x;
    this.y = y;
    this.wrapPosition();
    this.square.setX(this.x * this.squareLength);
    this.square.setY(this.y * this.squareLength);
    this.game.firework();
  } else {
    // bounce
  }      
};
MazeGame.Player.prototype.up = function() { this.moveTo(this.x, this.y - 1); };
MazeGame.Player.prototype.down = function() { this.moveTo(this.x, this.y + 1); };
MazeGame.Player.prototype.left = function() { this.moveTo(this.x - 1, this.y); };
MazeGame.Player.prototype.right = function() { this.moveTo(this.x + 1, this.y); };
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
