"use strict";

/**
 * Interface GameObject via Entity
 */

MazeGame.Player = function () {

  var Player = function Player(gridLength, squareLength, game, gridTranslator) {
    MazeGame.Entity.call(this, gridLength, squareLength, game, "white", gridTranslator);
  };

  // Explicit Inheritance
  Player.prototype = Object.create(MazeGame.Entity.prototype);

  Player.prototype.constructor = Player;

  Player.prototype.move = function (direction) {
    var success = MazeGame.Entity.prototype.move.call(this, direction);
    success && this.game.successfulMoveEvent();
    return success;
  };

  Player.prototype.setColor = function (color) {
    MazeGame.Entity.prototype.setColor.call(this, color);
  };

  return Player;
}();