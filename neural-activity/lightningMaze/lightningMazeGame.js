// Constructor calls super
MazeGame.LightningMazeGame = function(document, mazeDisplay, neuralDisplay, gridLength, squareLength) {
  var self = this;
  this.gridLength = gridLength;
  this.squareLength = squareLength;
  this.mazeDisplay = mazeDisplay;
  this.neuralDisplay = neuralDisplay;
  this.reset();
  neuralDisplay.start();
  document.addEventListener("keydown",function(evt) {self.keyPush(evt)});
};

// Explicit Inheritance
MazeGame.LightningMazeGame.prototype = Object.create(MazeGame.prototype);
MazeGame.LightningMazeGame.prototype.constructor = MazeGame;

MazeGame.prototype.clearDisplays = function() {
  this.mazeDisplay.clear();
  this.mazeDisplay.addFlashObject(this.maze);
  this.mazeDisplay.addObject(this.player);
  this.mazeDisplay.addObject(this.goalObject);
  this.drawLoop();    
};

