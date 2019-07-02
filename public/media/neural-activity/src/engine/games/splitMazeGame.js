"use strict";

// Constructor calls super

MazeGame.SplitMazeGame = function (keyboardDriver, mazeXDisplay, mazeYDisplay, neuralDisplay, gridLength, squareLength) {
  var self = this;
  Game.call(self);
  this.gridLength = gridLength;
  this.squareLength = squareLength;
  this.mazeXDisplay = mazeXDisplay;
  this.mazeYDisplay = mazeYDisplay;
  this.neuralDisplay = neuralDisplay;
  this.displays = [mazeXDisplay, mazeYDisplay, neuralDisplay];
  this.keyboardDriver = keyboardDriver;
};

// Explicit Inheritance
MazeGame.SplitMazeGame.prototype = Object.create(MazeGame.prototype);
MazeGame.SplitMazeGame.prototype.constructor = MazeGame.SplitMazeGame;

MazeGame.SplitMazeGame.prototype.clearDisplays = function () {
  this.horizontalDisplay = new MazeGame.HorizontalDisplay(this.drawMap, this.squareLength);
  this.verticalDisplay = new MazeGame.VerticalDisplay(this.drawMap, this.squareLength);

  this.mazeXDisplay.clear();
  this.mazeYDisplay.clear();
  this.mazeXDisplay.addObject(this.horizontalDisplay);
  this.mazeYDisplay.addObject(this.verticalDisplay);
  this.mazeXDisplay.addObject(this.player);
  this.mazeXDisplay.addObject(this.goalObject);
  this.mazeYDisplay.addObject(this.player);
  this.mazeYDisplay.addObject(this.goalObject);
  this.drawLoop();
};

MazeGame.SplitMazeGame.prototype.drawLoop = function () {
  this.mazeXDisplay.render();
  this.mazeYDisplay.render();
};

MazeGame.SplitMazeGame.prototype.win = function () {
  var self = this;
  var secondFlashDuration = 500;
  var secondFlashDelay = 75;
  var firstFlashDuration = secondFlashDelay + secondFlashDuration;
  this.mazeXDisplay.flash("blue", firstFlashDuration, function () {});
  setTimeout(function () {
    self.mazeYDisplay.flash("blue", secondFlashDuration, function () {
      self.gameEnd({ won: true });
    });
  }, secondFlashDelay);
};