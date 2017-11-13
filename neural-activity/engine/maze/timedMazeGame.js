MazeGame.TimedMazeGame = function() {
  TimedMazeGame = function(document, mazeDisplay, neuralDisplay, gridLength, squareLength) {
    this.objects = [];
    MazeGame.call(this, document, mazeDisplay, neuralDisplay, gridLength, squareLength);
    mazeDisplay.start();
  };

  // Explicit Inheritance
  TimedMazeGame.prototype = Object.create(MazeGame.prototype);

  TimedMazeGame.prototype.constructor = TimedMazeGame;

  TimedMazeGame.prototype.gameLoop = function() {
    for (var x = 0; x < this.objects.length; x++) {
      this.objects[x].gameLoop();
      if (this.objects[x].isDone()) {
        this.objects.splice(x, 1);
      }
    }
  };

  TimedMazeGame.prototype.startGameLoop = function() {
    if (this.gameLoopsPerSecond === 0) {
      return;
    }
    var milliseconds = 1000 / this.gameLoopsPerSecond;
    var self = this;
    this.gameInterval = setInterval(function() {self.gameLoop()}, milliseconds);
  };

  TimedMazeGame.prototype.stopGameLoop = function() {
    if (this.gameLoopsPerSecond === 0) {
      return;
    }
    clearInterval(this.gameInterval);
  };

  TimedMazeGame.prototype.addObject = function(object) {
    this.objects.push(object);
  }
  
  TimedMazeGame.prototype.reset = function() {
    this.objects = [];
    MazeGame.prototype.reset.call(this);
  }

  return TimedMazeGame;
}();