MazeGame = function(document, mazeDisplay, neuralDisplay, gridLength, squareLength) {
  var self = this;
  this.gridLength = gridLength;
  this.squareLength = squareLength;
  this.mazeDisplay = mazeDisplay;
  this.neuralDisplay = neuralDisplay;
  this.newMaze();
  this.won = false;
  neuralDisplay.start();
  document.addEventListener("keydown",function(evt) {self.keyPush(evt)});
}

MazeGame.prototype.newMaze = function() {
  this.map = MazeGame.generate(this.gridLength, this.gridLength);
  this.drawMap = MazeGame.translate(this.map);
  var goalSquareLocation = this.gridLength * this.squareLength - this.squareLength / 2;
  this.maze = new MazeGame.ThinMaze(this.drawMap, this.squareLength);
  this.player = new MazeGame.Player(this.gridLength, this.squareLength, this);
  this.goalObject = new DrawableCircle(goalSquareLocation, goalSquareLocation, this.squareLength / 4, "green");  
  this.clearDisplays();
}

MazeGame.prototype.clearDisplays = function() {
  this.mazeDisplay.clear();
  this.mazeDisplay.addObject(this.maze);
  this.mazeDisplay.addObject(this.player);
  this.mazeDisplay.addObject(this.goalObject);
  this.drawLoop();    
}

MazeGame.prototype.drawLoop = function() {
  this.mazeDisplay.drawLoop();
}

MazeGame.prototype.stop = function() {
  this.mazeDisplay.stop();
  this.neuralDisplay.stop();
}

MazeGame.prototype.validMove = function(x, y, direction) { 
  if (x === 0 && y === 0 && direction === Gamespace.UP) {
    return false;
  }

  if (x === this.gridLength && y === this.gridLength && direction === Gamespace.RIGHT) {
    return false;
  }

  return this.maze.validMove(x, y, direction); 
};

MazeGame.prototype.getPlayer = function() { return this.player; };

MazeGame.prototype.keyPush = function(evt) {
  switch(evt.keyCode) {
    case Gamespace.LEFT_CODE:
      this.player.left();
      break;
    case Gamespace.UP_CODE:
      this.player.up();
      break;
    case Gamespace.RIGHT_CODE:
      this.player.right();
      break;
    case Gamespace.DOWN_CODE:
      this.player.down();
      break;
  }

  this.drawLoop();

  if(this.winCondition()) {
    this.win();
  }
};

MazeGame.prototype.winCondition = function() {
  return this.player.x === this.gridLength - 1 && this.player.y === this.gridLength - 1;
}

MazeGame.prototype.win = function() {
  var self = this;
  this.won = true;
  this.mazeDisplay.flash("blue", 500, function() { self.newMaze(); });
}

MazeGame.prototype.firework = function() {
  this.neuralDisplay.addObject(new Firework(this.neuralDisplay.getLength()));
};