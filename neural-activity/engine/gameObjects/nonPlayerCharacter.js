/**
 * Interface GameObject via Entity
 */
MazeGame.NonPlayerCharacter = function() {

  // Go a random direction that's not exactly where you came from
  // unless that's the way you have to go.
  _move = function(self) {
    opposite = Gamespace.oppositeOf(self.lastDirection);
    validMoves = self.game.validMoves(self.x, self.y);

    if (validMoves.length === 1) {
      self.move(validMoves[0]);
      self.lastDirection = validMoves[0];
      return;
    }

    validMoves.splice(validMoves.indexOf(opposite), 1);
    index = Math.floor(Math.random() * validMoves.length);
    direction = validMoves[index];
    self.move(direction);
    self.lastDirection = validMoves[index];
    self.game.collisionCheck();
  }

  NonPlayerCharacter = function(gridLength, squareLength, game) {
    MazeGame.Entity.call(this, gridLength, squareLength, game, "red");
    this.loopCount = 0;
    this.lastDirection = Gamespace.UP;
  };

  // Explicit Inheritance
  NonPlayerCharacter.prototype = Object.create(MazeGame.Entity.prototype);

  NonPlayerCharacter.prototype.constructor = NonPlayerCharacter;

  NonPlayerCharacter.prototype.gameLoop = function() {
    if (this.loopCount % 4 == 0) {
      _move(this);
    }

    this.loopCount += 1;
  }

  NonPlayerCharacter.prototype.isDone = function() {
    return false;
  }

  // NonPlayerCharacter.prototype.draw = function(canvas, context) { 
  //   this.square.draw(canvas, context); 
  // };


  return NonPlayerCharacter;
}();