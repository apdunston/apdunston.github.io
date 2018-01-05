// Constructor calls super
MazeGame.LightningMazeGame = function(keyboardDriver, mazeDisplay, neuralDisplay, gridLength, squareLength) {
  var self = this;
  Game.call(self);
  this.gridLength = gridLength;
  this.squareLength = squareLength;
  this.mazeDisplay = mazeDisplay;
  this.neuralDisplay = neuralDisplay;
  this.displays = [mazeDisplay, neuralDisplay];
  this.keyboardDriver = keyboardDriver;
};

// Explicit Inheritance
MazeGame.LightningMazeGame.prototype = Object.create(MazeGame.prototype);
MazeGame.LightningMazeGame.prototype.constructor = MazeGame.LightningMazeGame;

MazeGame.LightningMazeGame.prototype.clearDisplays = function() {
  this.mazeDisplay.clear();
  this.mazeDisplay.addLightningObject(this.maze);
  this.mazeDisplay.addObject(this.player);
  this.mazeDisplay.addObject(this.goalObject);
  this.drawLoop();    
};
