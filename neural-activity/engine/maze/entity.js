MazeGame.Entity = function() {

  // Private
  var _wrapPosition = function(self) {
    if(self.x < 0) {
      self.x = self.gridLength - 1;
    }
    if(self.x > self.gridLength - 1) {
      self.x= 0;
    }
    if(self.y < 0) {
      self.y = self.gridLength - 1;
    }
    if(self.y > self.gridLength - 1) {
      self.y = 0;
    }
  }

  var _inPixels = function(self, value) {
    return value * self.squareLength + self.bump;
  };

  // Public
  Entity = function(gridLength, squareLength, game, color) {
    this.x = 0; 
    this.y = 0;
    this.color = color;
    this.gridLength = gridLength;
    this.game = game;
    this.squareLength = squareLength;
    var shrinkage = 5;
    var size = squareLength - shrinkage;
    this.bump = shrinkage / 2;
    this.square = new DrawableSquare(_inPixels(this, this.x), _inPixels(this, this.y), size, this.color);
  };

  Entity.prototype.setPosition = function(x, y) { 
    this.x = x; 
    this.y = y; 
    this.square.setX(_inPixels(this, this.x));
    this.square.setY(_inPixels(this, this.y));    
  };

  Entity.prototype.move = function(direction) {
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

      _wrapPosition(this);
      this.square.setX(_inPixels(this, this.x));
      this.square.setY(_inPixels(this, this.y));
      return true;
    } else {
      return false;
    }      
  };

  Entity.prototype.collidesWith = function(entity) {
    return this.x === entity.getX() && this.y === entity.getY();
  }

  Entity.prototype.getX = function() { return this.x; };
  Entity.prototype.getY = function() { return this.y; };
  Entity.prototype.up = function() { this.move(Gamespace.UP); };
  Entity.prototype.down = function() { this.move(Gamespace.DOWN); };
  Entity.prototype.left = function() { this.move(Gamespace.LEFT); };
  Entity.prototype.right = function() { this.move(Gamespace.RIGHT); };
  Entity.prototype.isDone = function() { return false; };
  Entity.prototype.draw = function(canvas, context) { this.square.draw(canvas, context); };
  return Entity;
}();