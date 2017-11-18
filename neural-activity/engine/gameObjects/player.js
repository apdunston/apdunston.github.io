/**
 * Interface GameObject via Entity
 */
MazeGame.Player = function() {

  Player = function(gridLength, squareLength, game) {
    MazeGame.Entity.call(this, gridLength, squareLength, game, "white");
  };

  // Explicit Inheritance
  Player.prototype = Object.create(MazeGame.Entity.prototype);

  Player.prototype.constructor = Player;

  Player.prototype.move = function(direction) {
    var success = MazeGame.Entity.prototype.move.call(this, direction);
    success && this.game.firework();
    return success;
  }
  return Player;
}();