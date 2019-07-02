"use strict";

/**
 * Interface Game
 * Interface KeyPushListener
 */

var ExampleGame = function () {
  var ExampleGame = function ExampleGame(keyboardDriver, display, display2, otherStuff) {
    var self = this;
    Game.call(self);
    this.displays = [mazeDisplay, neuralDisplay];
    this.keyboardDriver = keyboardDriver;
  };

  ExampleGame.prototype = Object.create(Game.prototype);
  ExampleGame.prototype.constructor = LightningDisplay;

  ExampleGame.prototype.start = function () {
    var self = this;
    Game.prototype.start.call(self);
    this.reset();
  };

  ExampleGame.prototype.keyDown = function (evt) {
    switch (evt.keyCode) {
      case Gamespace.LEFT_CODE:
        // do something
        break;
      case Gamespace.UP_CODE:
        // do something
        break;
      case Gamespace.RIGHT_CODE:
        // do something
        break;
      case Gamespace.DOWN_CODE:
        // do something
        break;
    }
  };

  return ExampleGame;
}();