/**
 * Interface GameObject via Entity
 */
MazeGame.Player = function() {

  Player = function(gridLength, squareLength, game, gridTranslator) {
    MazeGame.Entity.call(this, gridLength, squareLength, game, "white", gridTranslator);
  };

  // Explicit Inheritance
  Player.prototype = Object.create(MazeGame.Entity.prototype);

  Player.prototype.constructor = Player;

  Player.prototype.move = function(direction) {
    var success = MazeGame.Entity.prototype.move.call(this, direction);
    success && this.game.successfulMoveEvent();
    return success;
  }
  return Player;
}();